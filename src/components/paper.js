import { Accordion, Box, Text, Link, Stack } from '@chakra-ui/react'

export const Paper = ({
  title,
  published_info,
  authors,
  doi,
  abstract,
  number,
}) => {
  return (
    <Accordion.Item
      value={title}
      my={4}
      borderWidth={1}
      borderColor={{ base: 'gray.200', _dark: 'gray.700' }}
      borderRadius='md'
      overflow='hidden'
    >
      <h2>
        <Accordion.ItemTrigger px={4} py={2} cursor='pointer'>
          <Accordion.ItemIndicator mx={8} />
          <Stack direction='column'>
            <Box as='b' textAlign='left'>
              {title}
            </Box>
            <Box textAlign='left'>{authors}</Box>
            <Box as='i' textAlign='left'>
              {published_info}
            </Box>
            <Link
              textAlign='left'
              href={doi}
              color='blue.500'
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              View paper
            </Link>
            {number && (
              <Box as='i' color='gray.500' textAlign='left'>
                Article #{number}
              </Box>
            )}
          </Stack>
        </Accordion.ItemTrigger>
      </h2>
      <Accordion.ItemContent>
        <Accordion.ItemBody px={4} pb={4}>
          <Text>{abstract}</Text>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}
