import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { BaseLayout } from '@/layouts/BaseLayout'
import { ApiClientProvider } from '@/providers/ApiClientProvider'
import { SWRConfigProvider } from '@/providers/SWRConfigProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApiClientProvider>
        <SWRConfigProvider>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </SWRConfigProvider>
      </ApiClientProvider>
    </ChakraProvider>
  )
}
