import { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { useApiClientContext } from '@/providers/ApiClientProvider'

type Props = {
  children: ReactNode
}
export const SWRConfigProvider = ({ children }: Props) => {
  const apiClient = useApiClientContext()

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => apiClient(url),
      }}
    >
      {children}
    </SWRConfig>
  )
}
