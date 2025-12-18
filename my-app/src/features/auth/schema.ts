import { z } from "zod"

export const AuthSchemas = {
  login: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
}

export type LoginSchema = z.infer<typeof AuthSchemas.login>
