import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme, useToggleTheme } from '../provider/ThemeProvider'

import styles from '../styles/ThemeToggleButton.module.css'

export const ThemeToggleButton = () => {
  const theme = useTheme()
  const toggleTheme = useToggleTheme()
  let btnStyle = ''
  if (theme === 'dark') {
    btnStyle = styles.on
  } else {
    btnStyle = styles.off
  }

  return (
    <button onClick={() => toggleTheme()} className={styles.button}>
      <div className={`${btnStyle} ${styles.circle}`}>
        <i className={styles.icon}>
          {theme === 'dark' ? <BsMoon /> : <BsSun />}
        </i>
      </div>
    </button>
  )
}
