import { FallbackProps } from 'react-error-boundary'
import styles from '../styles/ErrorDetail.module.css'

export const ErrorDetail = ({ error }: FallbackProps) => {
  return (
    <div>
      <p className={styles.title}>error ocurred.</p>
      <p>detail is here.</p>
      <p>{error.message}</p>
    </div>
  )
}
