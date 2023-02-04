import { Theme } from '../provider/ThemeProvider'

const themeKey = 'theme'

export const getTheme: () => Theme | undefined = () => {
  const theme = localStorage.getItem(themeKey)
  if (theme) {
    return theme as Theme
  }
  return undefined
}

export const setTheme = (theme: Theme) => {
  localStorage.setItem(themeKey, theme)
}
