import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


function App() {
  const MainPage = lazy(() => import("./pages/main/page.tsx")) // 메인 페이지
  const ListPage = lazy(() => import("./pages/list/page.tsx")) // 리스트 페이지
  const ProjectPage = lazy(() => import("./pages/project/page.tsx"))
  return (
    <Suspense fallback={<div>페이지가 로딩중 입니다...</div>}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/project' element={<ProjectPage />} />
      </Routes>

    </Suspense>
  )
}

export default App
