import { lazy, Suspense } from 'react'
import './App.css'

function App() {
  const MainPage = lazy(() => import("./pages/main/page.tsx")) // 메인 페이지

  return (
    <Suspense fallback={<div>페이지가 로딩중 입니다...</div>}>
      <MainPage />
    </Suspense>
  )
}

export default App
