import { Center, Spinner } from '@chakra-ui/react'

export const LoadingOverlay = () => {
  return (
    <Center position={'fixed'} inset={0}>
      <Spinner />
    </Center>
  )
}
