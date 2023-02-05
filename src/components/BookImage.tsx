import { ComponentPropsWithoutRef, SyntheticEvent } from 'react'
import notFoundImage from '../assets/not_found.jpg'
type ImageProps = ComponentPropsWithoutRef<'img'> & {
  title?: string
  thumnailURL?: string
}

export const BookImage = (props: ImageProps) => {
  const { title, thumnailURL } = props
  return (
    <img
      src={thumnailURL || notFoundImage}
      alt={title}
      onError={(e: SyntheticEvent<HTMLImageElement>) => {
        if (e.target instanceof HTMLImageElement) {
          e.target.src = notFoundImage
        }
      }}
      width={160}
      {...props}
    />
  )
}
