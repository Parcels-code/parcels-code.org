import { Alert } from '@chakra-ui/react'

export const Quote = ({ children, ...props }) => {
  return (
    <Alert.Root
      mt={4}
      w='98%'
      bg={{ base: 'blue.50', _dark: 'blue.900' }}
      variant='subtle'
      status='info'
      // v2's 'left-accent' variant
      borderStartWidth='4px'
      borderStartColor='colorPalette.solid'
      rounded='none'
      css={{
        '& > *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    >
      <Alert.Content display='block'>{children}</Alert.Content>
    </Alert.Root>
  )
}
