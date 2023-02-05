import { ComponentPropsWithoutRef } from 'react'
import styles from '../styles/SearchInput.module.css'

type SearchInputProps = ComponentPropsWithoutRef<'input'>

export const SearchInput = (props: SearchInputProps) => {
  return (
    <div className={styles.input_container}>
      <input
        {...props}
        className={styles.search_bar}
        type="text"
        placeholder="🔍 Search Books"
      ></input>
    </div>
  )
}
