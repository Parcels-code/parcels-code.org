import {
  AvatarGroup,
  Box,
  Container,
  Heading,
  Separator,
  Spacer,
  Stack,
  StackSeparator,
  Text,
  VStack,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { AuthorAvatar } from '@/components/author-avatar'
import { Layout } from '@/components/layout'
import { Link } from '@/components/mdx'
import { distanceToNow, formatDate } from '@/lib/date-formatting'
import { getSortedPostsMetadata } from '@/lib/posts'
import { generateRssFeed } from '@/lib/rss-feed'

const SinglePost = ({ page }) => {
  const date = new Date(page.date)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Stack
        gap='2'
        align='stretch'
        // v2 used negative stack spacing to pull posts towards the dividers
        my={{ base: 1, md: 6 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box>
          <Link href={`/blog/${page.id}`} fontSize={'xl'} fontWeight={'bold'}>
            {page.title}
          </Link>

          <Text
            fontSize={'sm'}
            color={{ base: 'gray.600', _dark: 'gray.300' }}
            py={4}
          >
            {formatDate(date)} ({distanceToNow(date)})
          </Text>

          <Text lineClamp={3} py={4}>
            {page.summary}
          </Text>
        </Box>
        <Spacer />
        <Box>
          <AvatarGroup size={'2xl'} gap={0} spaceX={'-3'}>
            {page.authors.map((author) => {
              return <AuthorAvatar key={author.name} author={author} />
            })}
          </AvatarGroup>
        </Box>
      </Stack>
    </motion.div>
  )
}

export default function Blog({ allPostsData }) {
  return (
    <Layout
      title={'Blog | Parcels'}
      url={`/blog`}
      card={
        'https://raw.githubusercontent.com/Parcels-code/parcels-code.org/main/public/parcels-assets/logo-no-text.png'
      }
    >
      <Box as='section'>
        <Container maxW='container.lg' py={20}>
          <Heading as='h1' size='2xl' textAlign={'center'} my={4}>
            Blog
          </Heading>
          <Text
            color={{ base: 'gray.800', _dark: 'white' }}
            fontSize={'lg'}
            textAlign={'center'}
          >
            Announcements and news from the Parcels team.
          </Text>

          <Separator my={4} borderColor='gray.200' />

          <VStack
            separator={<StackSeparator borderColor='gray.200' />}
            gap={0}
            align='stretch'
          >
            {allPostsData.map((page) => {
              return <SinglePost key={page.id} page={page} />
            })}
          </VStack>
          <Separator my={2} borderColor='gray.200' />
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsMetadata()
  await generateRssFeed(allPostsData)
  return {
    props: {
      allPostsData,
    },
  }
}
