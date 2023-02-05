import { bookAPIResponse } from '../api/type'
import { bookAPIURL } from '../config/url'

export const getBookDetail = async (id?: string) => {
  if (id === undefined) {
    return Promise.reject(new Error('id must be required'))
  }
  const url = `${bookAPIURL}/${id}`
  const res: bookAPIResponse['items'][number] = await fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
    return res.json()
  })
  return res
}
