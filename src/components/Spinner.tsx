import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styles from '../styles/Spinner.module.css'

export const Spinner = () => {
  return (
    <i>
      <AiOutlineLoading3Quarters className={styles.load_icon} />
    </i>
  )
}
