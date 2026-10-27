import { ColorModeImage } from '@/components/ColorModeImage'
import { ColorModeToggle } from '@/components/ColorModeToggle'
import { DesktopNav } from '@/components/desktop-nav'
import { Link } from '@/components/mdx'
import { MobileNav } from '@/components/mobile-nav'
import { menuItems } from '@/data/menu-items'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { LuMenu, LuX } from 'react-icons/lu'

export const Header = () => {
  const navItems = React.useMemo(() => menuItems, [])

  const { open: isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        as={'header'}
        pos='fixed'
        top={'0'}
        w={'full'}
        minH={'60px'}
        boxShadow={'sm'}
        zIndex={'999'}
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          _dark: { backgroundColor: 'rgba(26, 32, 44, 0.8)' },
        }}
      >
        <Container display='flex' maxW={'container.lg'} alignItems={'center'}>
          <Flex
            flex={{ base: '0', md: 'auto' }}
            ml={{ base: -2 }}
            mr={{ base: 6, md: 0 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
            >
              {isOpen ? <LuX /> : <LuMenu />}
            </IconButton>
          </Flex>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'start', md: 'start' }}
          >
            <Link href={'/'} display={'flex'} alignItems={'center'}>
              <ColorModeImage
                w={48}
                lightSrc={'/parcels-assets/logo-horo.svg'}
                darkSrc={'/parcels-assets/logo-horo_dia.svg'}
                alt={'parcels logo'}
              />
            </Link>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            gap={{ base: 6, md: 8 }}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}
          >
            <DesktopNav
              navItems={navItems}
              display={{ base: 'none', md: 'flex' }}
            />
            <Stack direction={'row'} align={'center'} gap={0}>
              <IconButton
                asChild
                aria-label={'Open GitHub repository'}
                variant={'ghost'}
                size={'lg'}
              >
                <a
                  href={'https://github.com/Parcels-code/parcels'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <FaGithub />
                </a>
              </IconButton>
              <ColorModeToggle size={'lg'} />
            </Stack>
          </Stack>
        </Container>
      </Flex>
      <MobileNav isOpen={isOpen} navItems={navItems} />
    </Box>
  )
}
