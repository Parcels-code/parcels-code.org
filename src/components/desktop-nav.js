import { Link } from '@/components/mdx'
import { Box, Flex, HoverCard, Icon, Portal, Stack, Text } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'

const NavLink = ({ navItem }) => (
  <Link
    p={2}
    href={navItem.href ?? '/#'}
    fontSize={'sm'}
    fontWeight={'bold'}
    whiteSpace={'nowrap'}
    flexShrink={0}
    color={{ base: 'gray.600', _dark: 'gray.200' }}
    _hover={{
      textDecoration: 'none',
      color: { base: 'gray.800', _dark: 'white' },
    }}
  >
    {navItem.label}
  </Link>
)

export const DesktopNav = ({ navItems, ...props }) => {
  return (
    <Stack direction={'row'} gap={4} {...props}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children ? (
            // v2's hover-triggered Popover is a HoverCard in v3
            <HoverCard.Root positioning={{ placement: 'bottom-start' }}>
              <HoverCard.Trigger asChild>
                <NavLink navItem={navItem} />
              </HoverCard.Trigger>
              <Portal>
                <HoverCard.Positioner>
                  <HoverCard.Content
                    border={0}
                    boxShadow={'xl'}
                    bg={{ base: 'white', _dark: 'gray.800' }}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </HoverCard.Content>
                </HoverCard.Positioner>
              </Portal>
            </HoverCard.Root>
          ) : (
            <NavLink navItem={navItem} />
          )}
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href ?? '#'}
      className='group'
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: { base: 'blue.50', _dark: 'gray.900' } }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'blue.400'} w={5} h={5}>
            <LuChevronRight />
          </Icon>
        </Flex>
      </Stack>
    </Link>
  )
}
