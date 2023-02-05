import styles from '../styles/BookCard.module.css'
import { Link } from 'react-router-dom'
import notFoundImage from '../assets/not_found.jpg'
import { SyntheticEvent } from 'react'

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
      <img
        src={thumbnail || notFoundImage}
        alt={title}
        onError={(e: SyntheticEvent<HTMLImageElement>) => {
          if (e.target instanceof HTMLImageElement) {
            e.target.src = notFoundImage
          }
        }}
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
