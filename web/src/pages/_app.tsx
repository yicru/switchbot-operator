import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { BaseLayout } from '@/layouts/BaseLayout'
import { SWRConfig } from 'swr'
import { ofetch } from 'ofetch'
import { useLocalStorage } from 'react-use'
import { HEADERS_KEYS, LOCAL_STORAGE_KEYS } from '@/constants'

export default function App({ Component, pageProps }: AppProps) {
  const [token] = useLocalStorage<string>(LOCAL_STORAGE_KEYS.token)
  const [clientSecret] = useLocalStorage<string>(
    LOCAL_STORAGE_KEYS.clientSecret
  )

  return (
    <ChakraProvider>
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            ofetch(url, {
              headers: {
                [HEADERS_KEYS.sbToken]: token || '',
                [HEADERS_KEYS.sbClientSecret]: clientSecret || '',
              },
            }),
        }}
      >
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </SWRConfig>
    </ChakraProvider>
  )
}
