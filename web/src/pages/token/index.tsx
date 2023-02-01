import { Input } from '@chakra-ui/input'
import { FormControl, FormLabel, Grid } from '@chakra-ui/react'
import React from 'react'
import { useLocalStorage } from 'react-use'

const TokenPage = () => {
  const [token, setToken] = useLocalStorage<string>('token')
  const [clientSecret, setClientSecret] =
    useLocalStorage<string>('client-secret')

  return (
    <Grid py={4} px={1} gap={4}>
      <FormControl>
        <FormLabel>トークン</FormLabel>
        <Input value={token ?? ''} onChange={(e) => setToken(e.target.value)} />
      </FormControl>

      <FormControl>
        <FormLabel>クライアントシークレット</FormLabel>
        <Input
          value={clientSecret ?? ''}
          onChange={(e) => setClientSecret(e.target.value)}
        />
      </FormControl>
    </Grid>
  )
}

export default TokenPage
