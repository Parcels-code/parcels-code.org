import {
  Collapsible,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'

import { Link } from '@/components/mdx'

const MobileNavItem = ({ href, children, label }) => {
  const { open: isOpen, onToggle } = useDisclosure()

  const handleToggle = (e) => {
    if (children) {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <Stack gap={4} onClick={handleToggle}>
      <Link
        href={href ?? '/#'}
        display={'flex'}
        py={2}
        justifyContent={'space-between'}
        alignItems={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          whiteSpace={'nowrap'}
          color={{ base: 'gray.600', _dark: 'gray.200' }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          >
            <LuChevronDown />
          </Icon>
        )}
      </Link>

      <Collapsible.Root open={isOpen} style={{ marginTop: '0!important' }}>
        <Collapsible.Content>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            whiteSpace={'nowrap'}
            borderColor={{ base: 'gray.200', _dark: 'gray.700' }}
            align={'start'}
          >
            {' '}
            {children &&
              children.map((child, index) => (
                <Link key={index} href={child.href ?? '#'} py={2}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  )
}

export const MobileNav = ({ navItems, isOpen }) => {
  if (!isOpen) return null

  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos='fixed'
      top='60px'
      w={'full'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        _dark: { backgroundColor: 'rgba(26, 32, 44, 0.8)' },
      }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
