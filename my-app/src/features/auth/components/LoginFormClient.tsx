"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginSchema } from "../schema"
import { loginAction } from "../actions"

export default function LoginFormClient() {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.currentTarget as HTMLFormElement
    const fd = new FormData(target)
    const values = Object.fromEntries(fd.entries())
    const result = loginSchema.safeParse(values)
    
    if (!result.success) {
      const map: Record<string, string> = {}
      const flattened = result.error.flatten()
      for (const field in flattened.fieldErrors) {
        const fieldErrors = flattened.fieldErrors[field as keyof typeof flattened.fieldErrors]
        if (fieldErrors && Array.isArray(fieldErrors) && fieldErrors.length > 0) {
          map[field] = fieldErrors[0]
        }
      }
      setErrors(map)
      setIsSubmitting(false)
    } else {
      setErrors({})
      setIsSubmitting(true)
      try {
        const res = await loginAction(result.data)
        if (res.success) {
          console.log('Login successful:', res.data)
          router.push('/main')
        } else {
          setErrors({ form: res.error || 'Login failed' })
          setIsSubmitting(false)
        }
      } catch (error) {
        console.error('Login error:', error)
        setErrors({ form: 'An error occurred during login' })
        setIsSubmitting(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email/ID Input */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Email</label>
        <input
          name="id"
          type="text"
          placeholder="Enter your email"
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/25"
        />
        {errors.id && (
          <p className="text-red-300 text-xs mt-2 font-medium">{errors.id}</p>
        )}
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/25"
        />
        {errors.password && (
          <p className="text-red-300 text-xs mt-2 font-medium">{errors.password}</p>
        )}
      </div>

      {/* Remember & Forgot */}
      <div className="flex items-center justify-between pt-1">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 rounded bg-white/20 border-white/30 text-pink-400 cursor-pointer accent-pink-400 focus:ring-0"
          />
          <span className="text-xs text-white/70 font-medium group-hover:text-white transition-colors">Remember me</span>
        </label>
        <a href="#" className="text-xs text-white/70 hover:text-white font-medium transition-colors">
          Forgot password?
        </a>
      </div>

      {/* Form-level error */}
      {errors.form && (
        <div className="bg-red-500/20 border border-red-400/50 text-red-200 px-4 py-3 rounded-xl text-xs font-medium backdrop-blur-sm">
          {errors.form}
        </div>
      )}

      {/* Sign In Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 mt-6 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 active:from-pink-700 active:to-pink-800 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-purple-900 text-sm shadow-lg hover:shadow-xl hover:scale-105 transform disabled:hover:scale-100 text-base"
      >
        {isSubmitting ? 'SIGNING IN...' : 'LOGIN'}
      </button>
    </form>
  )
}
