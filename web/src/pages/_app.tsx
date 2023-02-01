import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { BaseLayout } from '@/layouts/BaseLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  )
}
