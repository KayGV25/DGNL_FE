import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from './ui/theme-provider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='cursor-pointer'
    >
      {theme === 'light' ? (
        <Sun className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <Moon className='absolute h-[1.2rem] w-[1.2rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
