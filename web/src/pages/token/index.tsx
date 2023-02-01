import { Input } from '@chakra-ui/input'
import { Button, FormControl, FormLabel, Grid } from '@chakra-ui/react'
import React from 'react'
import { useLocalStorage } from 'react-use'
import { LOCAL_STORAGE_KEYS } from '@/constants'
import Link from 'next/link'

const TokenPage = () => {
  const [token, setToken] = useLocalStorage<string>(LOCAL_STORAGE_KEYS.token)
  const [clientSecret, setClientSecret] = useLocalStorage<string>(
    LOCAL_STORAGE_KEYS.clientSecret
  )

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

      <Link href={'/'}>
        <Button w={'full'}>完了</Button>
      </Link>
    </Grid>
  )
}

export default TokenPage
