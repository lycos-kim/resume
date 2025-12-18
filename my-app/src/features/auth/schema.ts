import { z } from "zod"

export const loginSchema = z.object({
  id: z.string().min(1, '아이디는 필수입니다'),
  password: z.string().min(1, '비밀번호는 필수입니다'),
})

export type LoginInput = z.infer<typeof loginSchema>
