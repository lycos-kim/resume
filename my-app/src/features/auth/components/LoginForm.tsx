import Link from "next/link"
import LoginFormClient from "./LoginFormClient"

export default function LoginForm() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 bg-white">
        <div className="w-full max-w-sm">
          {/* Logo/Brand */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Welcome back</h1>
            <p className="text-gray-600 text-base">Sign in to your account to continue</p>
          </div>

          {/* Form */}
          <LoginFormClient />

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account? <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Sign up</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full opacity-10 -ml-40 -mb-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-8">
            <svg className="w-40 h-40 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Secure Login</h2>
          <p className="text-gray-600 max-w-xs leading-relaxed">
            Your account is protected with industry-leading security. Access your dashboard safely and efficiently.
          </p>
        </div>
      </div>
    </div>
  )
}

