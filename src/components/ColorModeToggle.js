import { ClientOnly, IconButton, Skeleton } from '@chakra-ui/react'
import { LuMoon, LuSun } from 'react-icons/lu'

import { useColorMode } from '@/components/ui/color-mode'

export function ColorModeToggle(props) {
  const { colorMode, toggleColorMode } = useColorMode()

  // The resolved colour mode is only known on the client
  return (
    <ClientOnly fallback={<Skeleton boxSize='10' />}>
      <IconButton
        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
        onClick={toggleColorMode}
        variant='ghost'
        {...props}
      >
        {colorMode === 'light' ? <LuMoon /> : <LuSun />}
      </IconButton>
    </ClientOnly>
  )
}
