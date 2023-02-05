import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BookCard } from '../components/BookCard'
import { getBooks } from '../api/getBooks'
import styles from '../styles/Top.module.css'
import { SearchInput } from '../components/SearchInput'

const Top = () => {
  const [params, setParamas] = useSearchParams()
  const [keyword, setKeyword] = useState(params.get('q') ?? '')

  const {
    status,
    data: books,
    error,
    isFetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['books', keyword],
    queryFn: () => getBooks(keyword),
    enabled: false,
  })

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setKeyword(v)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setParamas({ q: keyword })
    refetch()
  }

  if (status === 'error') {
    throw error
  }

  return (
    <div>
      <div className={styles.search_bar_container}>
        <form onSubmit={onSubmit}>
          <SearchInput onChange={onChangeKeyword} value={keyword} />
        </form>
      </div>
      {isLoading && isFetching && <p>fetching...</p>}
      {books && (
        <div className={styles.card_container}>
          {books.items.map((b, i) => {
            return (
              <BookCard
                id={b.id}
                title={b.volumeInfo.title}
                thumbnail={b.volumeInfo.imageLinks?.thumbnail}
                authors={b.volumeInfo.authors}
                key={`${b.id}${i}`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
export default Top
