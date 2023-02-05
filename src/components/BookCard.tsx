import styles from '../styles/BookCard.module.css'
import { Link } from 'react-router-dom'
import notFoundImage from '../assets/not_found.jpg'
import { BookImage } from './BookImage'

type BookCardProps = {
  id: string
  title: string
  thumbnail?: string
  authors?: string[]
}

export const BookCard = ({ id, title, thumbnail, authors }: BookCardProps) => {
  return (
    <Link to={`/detail/${id}`} className={styles.container}>
      <p className={styles.title}>{title}</p>
      <BookImage
        thumnailURL={thumbnail || notFoundImage}
        title={title}
        width={160}
      />
      {authors?.map((author) => {
        return (
          <p className={styles.authors} key={author}>
            {author}
          </p>
        )
      })}
    </Link>
  )
}
