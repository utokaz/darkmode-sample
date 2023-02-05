import { bookAPIURL } from '../config/url'
import { bookAPIResponse } from './type'

export const getBooks = async (q: string, next: string = '0') => {
  const url = `${bookAPIURL}?q=${q}&results=10&startIndex=${next}`
  const res: bookAPIResponse = await fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Something went wrong')
    }

    return res.json()
  })
  return { ...res, nextPage: Number(next) + 1 }
}
