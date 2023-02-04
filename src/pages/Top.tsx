import styles from '../styles/Top.module.css'

import { ThemeToggleButton } from '../components/ThemeToggleButton'

const Top = () => {
  return (
    <div>
      <h1 className={styles.title}>top</h1>
      <ThemeToggleButton />
    </div>
  )
}
export default Top
