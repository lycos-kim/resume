import Link from 'next/link'

export const metadata = {
  title: 'Developer Resume',
  description: 'Professional Developer Resume',
}

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header - Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Resume</h1>
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
            로그아웃
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-12 text-white mb-8 shadow-lg">
          <h1 className="text-5xl font-bold mb-2">김개발</h1>
          <p className="text-xl text-white/90 mb-4">Full Stack Developer | React & Node.js Specialist</p>
          <div className="flex gap-6 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              dev@example.com
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.766l.296 1.696a1 1 0 01-.477 1.033l-2.561 1.313a11.002 11.002 0 005.68 5.681l1.313-2.561a1 1 0 011.033-.477l1.696.296a1 1 0 01.766.986v2.153a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2z"></path>
              </svg>
              +82-10-1234-5678
            </span>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-purple-200">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            5년 이상의 웹 개발 경험을 보유한 풀스택 개발자입니다. React, Node.js, TypeScript를 주로 사용하며, 
            사용자 중심의 인터페이스와 확장 가능한 백엔드 시스템 구축에 전문성을 가지고 있습니다.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend</h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-2 mb-2">React</span>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-2 mb-2">TypeScript</span>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-2 mb-2">Next.js</span>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-2 mb-2">Tailwind CSS</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Backend</h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mr-2 mb-2">Node.js</span>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mr-2 mb-2">Express</span>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mr-2 mb-2">PostgreSQL</span>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mr-2 mb-2">MongoDB</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tools & Others</h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mr-2 mb-2">Git</span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mr-2 mb-2">Docker</span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mr-2 mb-2">AWS</span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mr-2 mb-2">REST API</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-200">Experience</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900">Senior Frontend Developer</h3>
              <p className="text-gray-600 text-sm mb-2">TechCorp | 2022 - Present</p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• React와 TypeScript를 사용한 엔터프라이즈 웹 애플리케이션 개발</li>
                <li>• 팀의 프론트엔드 아키텍처 설계 및 코드 리뷰 담당</li>
                <li>• 성능 최적화로 초기 로딩 시간 40% 단축</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900">Full Stack Developer</h3>
              <p className="text-gray-600 text-sm mb-2">StartupXYZ | 2019 - 2022</p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Node.js와 Express를 활용한 RESTful API 개발</li>
                <li>• React를 이용한 반응형 웹 UI 구현</li>
                <li>• 마이크로서비스 아키텍처 구현 및 배포</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-200">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 text-sm mb-3">React, Node.js, PostgreSQL을 활용한 완전한 전자상거래 플랫폼</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">PostgreSQL</span>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Chat App</h3>
              <p className="text-gray-600 text-sm mb-3">WebSocket을 활용한 실시간 메시징 애플리케이션</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Socket.io</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-200">Education</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600">Seoul National University | 2018</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Full Stack Developer Bootcamp</h3>
              <p className="text-gray-600">Dev Academy Korea | 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
