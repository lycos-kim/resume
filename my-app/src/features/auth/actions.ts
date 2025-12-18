'use server'

import { z } from "zod"
import fs from "fs"
import path from "path"
import { loginSchema, LoginInput } from './schema'

async function readMemberXml() {
  const candidates = [
    path.join(process.cwd(), 'src', 'features', 'auth', 'member.xml'),
    path.join(process.cwd(), 'my-app', 'src', 'features', 'auth', 'member.xml'),
  ]
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        return fs.readFileSync(p, 'utf-8')
      }
    } catch (_) {
      // ignore and try next
    }
  }
  return null
}

interface Member {
  id: string | null
  password: string | null
  name: string | null
  email: string | null
}

function parseMembersFromXml(xml: string): Member[] {
  const members: Member[] = []
  const memberRegex = /<member>([\s\S]*?)<\/member>/g
  let match
  while ((match = memberRegex.exec(xml)) !== null) {
    const memberXml = match[1]
    const id = /<id>(.*?)<\/id>/s.exec(memberXml)?.[1]?.trim() || null
    const password = /<password>(.*?)<\/password>/s.exec(memberXml)?.[1]?.trim() || null
    const name = /<name>(.*?)<\/name>/s.exec(memberXml)?.[1]?.trim() || null
    const email = /<email>(.*?)<\/email>/s.exec(memberXml)?.[1]?.trim() || null
    members.push({ id, password, name, email })
  }
  return members
}

export async function loginAction(formData: LoginInput) {
  try {
    const parsed = loginSchema.parse(formData)

    const xml = await readMemberXml()
    if (!xml) {
      return { success: false, error: 'Member database not found' }
    }
    
    const members = parseMembersFromXml(xml)
    const inputId = parsed.id
    const inputPw = parsed.password

    const member = members.find(m => m.id === inputId && m.password === inputPw)
    
    if (member) {
      const user = { 
        id: member.id, 
        name: member.name,
        email: member.email
      }
      return { success: true, data: user }
    }

    return { success: false, error: 'Invalid credentials' }
  } catch (err) {
    let message = 'Unknown error'
    if (err instanceof z.ZodError) {
      const flattened = err.flatten()
      const errors = Object.values(flattened.fieldErrors).flat()
      message = errors.length > 0 ? errors[0] : 'Validation failed'
    }
    return { success: false, error: message }
  }
}
