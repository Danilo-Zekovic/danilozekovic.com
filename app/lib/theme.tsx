import React, { createContext, useContext, useEffect, useState } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = [
  Theme | string | null,
  (theme: Theme | string) => void
]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const storageKey = 'theme'

export function ThemeScript() {
  const script = `
    (function() {
      try {
        var match = document.cookie.match(/(?:^|; )theme=([^;]*)/);
        var theme = match ? decodeURIComponent(match[1]) : localStorage.getItem('${storageKey}');
        if (!theme) {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null
    const match = document.cookie.match(/(?:^|; )theme=([^;]*)/)
    if (match) return decodeURIComponent(match[1])
    return localStorage.getItem(storageKey)
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const match = document.cookie.match(/(?:^|; )theme=([^;]*)/)
    const initial = match
      ? decodeURIComponent(match[1])
      : localStorage.getItem(storageKey) ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')

    setThemeState(initial)
    if (initial === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const setTheme = (newTheme: Theme | string) => {
    setThemeState(newTheme)
    if (typeof window !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem(storageKey, newTheme)
      document.cookie = `${storageKey}=${encodeURIComponent(newTheme)}; path=/; max-age=31536000; SameSite=Lax`
    }
  }

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
