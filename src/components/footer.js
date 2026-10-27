import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react'

import { ColorModeImage } from '@/components/ColorModeImage'
import { Link } from '@/components/mdx'
import { footerItems } from '@/data/footer-items'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'bold'} my={2}>
      {children}
    </Text>
  )
}

const FooterLinks = ({ title, items }) => {
  return (
    <Stack align={'flex-start'}>
      <ListHeader>{title}</ListHeader>
      {items.map((item) => {
        return (
          <Link
            key={item.label}
            href={item.href}
            fontSize={'sm'}
            _hover={{ color: 'blue.500' }}
          >
            {item.label}
          </Link>
        )
      })}
    </Stack>
  )
}

export const Footer = () => {
  return (
    <Box
      bg={{ base: 'gray.50', _dark: 'gray.900' }}
      color={{ base: 'gray.700', _dark: 'gray.200' }}
      as='footer'
    >
      <Container maxW='container.lg' my={8} centerContent>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          gap={{ base: 2, md: 8 }}
        >
          <Stack gap={6}>
            <Box>
              <ColorModeImage
                w={32}
                lightSrc={'/parcels-assets/logo-horo.svg'} //TODO: Update to svg in roughly 1h*3w (internal) and 1h*2w external (as was before)
                darkSrc={'/parcels-assets/logo-horo_dia.svg'} //TODO: Update to svg in roughly 1h*3w (internal) and 1h*2w external (as was before)
                alt={'parcels logo'}
              />
            </Box>

            <Text fontSize={'sm'}>
              © {new Date().getFullYear()}, Parcels core developers. Apache 2.0
              Licensed.
            </Text>
          </Stack>
          <FooterLinks title='Parcels' items={footerItems.parcels} />
          <FooterLinks title='Resources' items={footerItems.resources} />
          <FooterLinks title='Community' items={footerItems.community} />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
