import { z } from "zod"
import { cn } from "@/lib/utils"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type LoginInput = z.infer<typeof loginSchema>

export async function loginAction(formData: LoginInput) {
  try {
    const parsed = loginSchema.parse(formData)
    // TODO: replace with real auth call (DB / external service)
    const user = { id: "user_1", email: parsed.email }

    return { success: true, data: user }
  } catch (err) {
    const message = err instanceof z.ZodError ? err.errors.map(e => e.message).join(', ') : 'Unknown error'
    return { success: false, error: message }
  }
}
