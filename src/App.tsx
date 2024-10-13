import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListPage from './pages/list/page.tsx'

function App() {
  const MainPage = lazy(() => import("./pages/main/page.tsx")) // 메인 페이지

  return (
    <Suspense fallback={<div>페이지가 로딩중 입니다...</div>}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<ListPage />} />
      </Routes>

    </Suspense>
  )
}

export default App
