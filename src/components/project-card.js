import { Link } from '@/components/mdx'
import { Box, Card, Stack, Text } from '@chakra-ui/react'
import { ColorModeImage } from '@/components/ColorModeImage'

export const ProjectCard = ({
  name,
  description,
  repo,
  homepage,
  logo_light,
  logo_dark,
}) => {
  return (
    <Card.Root
      asChild
      display='flex'
      p={4}
      h='full'
      rounded='lg'
      borderWidth={0}
      transitionProperty='all'
      transitionDuration='slower'
      transitionTimingFunction='ease-out'
      bg='gray.50'
      _dark={{ bg: 'gray.700' }}
      _hover={{
        transform: 'scale(1.025)',
        boxShadow: 'md',
        textDecoration: 'none',
      }}
    >
      <Link href={repo || homepage}>
        <Card.Body p={0} h='full'>
          <Stack direction={'column'} justify={'space-between'} h='full' gap={0}>
            <Box>
              <ColorModeImage
                h={'128px'}
                w={'full'}
                lightSrc={logo_light}
                darkSrc={logo_dark}
                alt={name}
                objectFit='contain'
              />

              <Text my={4} lineClamp={4}>
                {description}
              </Text>
            </Box>
          </Stack>
        </Card.Body>
      </Link>
    </Card.Root>
  )
}
