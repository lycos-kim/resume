import LoginFormClient from '@/features/auth/components/LoginFormClient'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Login Card */}
      <div className="relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-sm shadow-lg border border-white/20">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome</h1>
            <p className="text-white/70 text-sm">Sign in to your account</p>
          </div>

          {/* Form */}
          <LoginFormClient />
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center">
          <p className="text-white/70 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
