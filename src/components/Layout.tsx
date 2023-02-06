import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Layout.module.css'
import { ThemeToggleButton } from './ThemeToggleButton'
import { ErrorDetail } from './ErrorDetail'

export const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>Book Searcher</p>
        <div className={styles.spacer}></div>
        <ThemeToggleButton />
      </header>

      <main className={styles.main}>
        <ErrorBoundary FallbackComponent={ErrorDetail}>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}
