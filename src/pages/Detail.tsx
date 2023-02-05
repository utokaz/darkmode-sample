import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import notFoundImage from '../assets/not_found.jpg'
import styles from '../styles/Detail.module.css'
import { BookImage } from '../components/BookImage'
import { getBookDetail } from '../api/getBookDetail'
import { Spinner } from '../components/Spinner'

const Detail = () => {
  const param = useParams<{ id: string }>()

  const {
    isLoading,
    isFetching,
    data: book,
  } = useQuery({
    queryKey: ['book_detail', param.id],
    queryFn: () => getBookDetail(param.id),
    enabled: param.id !== undefined,
  })

  if (isLoading && isFetching) {
    return <Spinner />
  }

  return (
    <div>
      <dl>
        <dt>タイトル</dt>
        <dd className={styles.title}>{book?.volumeInfo.title}</dd>
        <BookImage
          thumnailURL={book?.volumeInfo.imageLinks?.thumbnail || notFoundImage}
          title={book?.volumeInfo.title}
          width={200}
        />
        {book?.volumeInfo.authors?.map((author) => {
          return (
            <p className={styles.authors} key={author}>
              {author}
            </p>
          )
        })}
        <p>{book?.volumeInfo.publishedDate}</p>
        <p>{book?.volumeInfo.description}</p>
      </dl>
    </div>
  )
}

export default Detail
