export type Item = {
  kind: string
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    publishedDate: string
    description: string
    imageLinks?: {
      thumbnail?: string
    }
  }
}

export type bookAPIResponse = {
  kind: string
  totalItems: number
  items: Item[]
}
