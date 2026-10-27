import { Alert, Box, CloseButton, useDisclosure } from '@chakra-ui/react'

export const Banner = ({ title, description, children }) => {
  const { open: isVisible, onClose } = useDisclosure({ defaultOpen: true })

  return isVisible ? (
    <Box pt={16} px={20}>
      <Alert.Root
        status='info'
        variant='solid'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
      >
        <Alert.Indicator />

        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
        {children}

        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert.Root>
    </Box>
  ) : (
    <></>
  )
}
