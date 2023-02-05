import { bookAPIURL } from '../config/url'
import { bookAPIResponse } from './type'

export const getBooks = async (q: string) => {
  const url = `${bookAPIURL}?q=${q}`
  const res: bookAPIResponse = await fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
    return res.json()
  })
  return res
}
