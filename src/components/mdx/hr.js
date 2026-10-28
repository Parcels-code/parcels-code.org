import { Separator } from '@chakra-ui/react'

export const Hr = () => {
  return (
    <Separator
      borderColor={{ base: 'gray.200', _dark: 'gray.600' }}
      my={4}
      w='100%'
    />
  )
}
