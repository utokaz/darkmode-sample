import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import './styles/themes.css'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, staleTime: Infinity },
    },
  })

  const Top = lazy(() => import('./pages/Top'))
  const Detail = lazy(() => import('./pages/Detail'))
  const NotFound = lazy(() => import('./pages/404'))

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Top />} />
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
