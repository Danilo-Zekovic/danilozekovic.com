import { Moon, Sun } from 'lucide-react'
import { Theme, useTheme } from 'remix-themes'

import { Switch } from '@/components/ui/switch'

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem]" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </div>
  )
}
