import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { getTheme, setTheme as storeTheme } from '../utils/localStorage'

export type Theme = 'light' | 'dark'

type ThemeProviderProps = {
  children: ReactNode
}
const ctx = createContext<Theme | null>(null)
const mctx = createContext<{
  setTheme: Dispatch<SetStateAction<Theme>>
} | null>(null)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const store = getTheme()
  if (store === undefined) {
    storeTheme('light')
    document.documentElement.classList.add('light')
  } else {
    document.documentElement.classList.add(store)
  }
  const [theme, setTheme] = useState<Theme>(store || 'light')
  return (
    <ctx.Provider value={theme}>
      <mctx.Provider value={{ setTheme }}>{children}</mctx.Provider>
    </ctx.Provider>
  )
}

export const useTheme = () => {
  const theme = useContext(ctx)
  if (theme === null) {
    throw new Error('must be used wihin provider')
  }
  return theme
}

export const useToggleTheme = () => {
  const store = useContext(mctx)
  if (store === null) {
    throw new Error('must be used wihin provider')
  }
  const { setTheme } = store
  return () => {
    setTheme((theme) => {
      if (theme === 'light') {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        storeTheme('dark')
        return 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        storeTheme('light')
        return 'light'
      }
    })
  }
}
