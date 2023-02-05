import { useEffect, useState } from 'react'

export const useDebouncedKeyword = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
