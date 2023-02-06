import { useInfiniteQuery } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BookCard } from '../components/BookCard'
import { getBooks } from '../api/getBooks'
import styles from '../styles/Top.module.css'
import { SearchInput } from '../components/SearchInput'
import { Spinner } from '../components/Spinner'

const Top = () => {
  const [params, setParamas] = useSearchParams()
  const [keyword, setKeyword] = useState(params.get('q') ?? '')

  const {
    data: books,
    error,
    isFetching,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['books', keyword],
    queryFn: (nextPage) => getBooks(keyword, nextPage.pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
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

  if (isError) {
    throw error
  }

  return (
    <div>
      <div className={styles.search_bar_container}>
        <form onSubmit={onSubmit}>
          <SearchInput onChange={onChangeKeyword} value={keyword} />
        </form>
      </div>
      {isLoading && isFetching && (
        <div className={styles.loading_container}>
          <Spinner />
        </div>
      )}

      {books && (
        <div className={styles.card_container}>
          {books.pages.map((g) => {
            return g.items.map((b, i) => {
              return (
                <BookCard
                  id={b.id}
                  title={b.volumeInfo.title}
                  thumbnail={b.volumeInfo.imageLinks?.thumbnail}
                  authors={b.volumeInfo.authors}
                  key={`${b.id}${i}`}
                />
              )
            })
          })}
        </div>
      )}
      {books?.pages !== undefined && books.pages.length > 0 && (
        <div className={styles.more_load_container}>
          <button onClick={() => fetchNextPage()}>read more</button>
        </div>
      )}
    </div>
  )
}
export default Top
