import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Layout.module.css'

export const Layout = () => {
  return (
    <>
      <header>
        <p className={styles.title}>Book Searcher</p>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
