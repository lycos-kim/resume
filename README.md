✨주요 기능 (Features)
SSR & ISR: Next.js의 서버 사이드 렌더링을 통한 SEO 최적화
Responsive Design: 모바일, 태블릿, 데스크탑 대응 (Tailwind CSS)
State Management: Zustand / React Query를 활용한 효율적인 상태 관리
Authentication: NextAuth.js를 이용한 소셜 로그인 및 보안


⚙️ 시작하기 (Getting Started)
1. 요구 사항
Node.js v20 이상
npm 또는 pnpm
2. 설치 및 실행
bash
# 저장소 클론
git clone github.com

# 폴더 이동
cd 저장소명

# 의존성 설치 (pnpm 권장)
pnpm install

# 로컬 개발 서버 실행
pnpm dev

src/
 ├── app/              # App Router (Pages & Layouts)
 ├── components/       # 공통 컴포넌트 (UI, Shared)
 ├── hooks/            # 커스텀 훅
 ├── lib/              # 유틸리티 및 설정 (Prisma, Axios 등)
 ├── store/            # 상태 관리 (Zustand 등)
 └── types/            # TypeScript 타입 정의

 🌐 배포 (Deployment)
본 프로젝트는 Vercel을 통해 배포되었습니다.
실제 서비스 보러가기

📄 라이선스 (License)
Copyright © 2025 [본인 이름].
이 프로젝트는 MIT 라이선스를 따릅니다.
