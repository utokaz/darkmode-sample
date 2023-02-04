import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import './styles/themes.css'

function App() {
  const Top = lazy(() => import('./pages/Top'))
  const Detail = lazy(() => import('./pages/Detail'))
  const NotFound = lazy(() => import('./pages/404'))

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Top />} />
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App
