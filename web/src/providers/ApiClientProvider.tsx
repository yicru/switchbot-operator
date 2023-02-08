import { createContext, ReactNode, useContext, useMemo } from 'react'
import { $Fetch, ofetch } from 'ofetch'
import { useLocalStorage } from 'react-use'
import { HEADERS_KEYS, LOCAL_STORAGE_KEYS } from '@/constants'

const ApiClientContext = createContext<$Fetch | null>(null)

type Props = {
  children: ReactNode
}

export const ApiClientProvider = ({ children }: Props) => {
  const [token] = useLocalStorage<string>(LOCAL_STORAGE_KEYS.token)
  const [clientSecret] = useLocalStorage<string>(
    LOCAL_STORAGE_KEYS.clientSecret
  )

  const apiClient = useMemo(() => {
    return ofetch.create({
      headers: {
        [HEADERS_KEYS.sbToken]: token || '',
        [HEADERS_KEYS.sbClientSecret]: clientSecret || '',
      },
    })
  }, [clientSecret, token])

  return (
    <ApiClientContext.Provider value={apiClient}>
      {children}
    </ApiClientContext.Provider>
  )
}

export const useApiClientContext = () => {
  const apiClient = useContext(ApiClientContext)

  if (!apiClient) {
    throw new Error('ApiClientContext is not provided')
  }

  return apiClient
}
