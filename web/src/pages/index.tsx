import { Box, Button, Grid, HStack, Spacer, Text } from '@chakra-ui/react'
import useSWR from 'swr'
import { DevicesResponse } from '@/pages/api/devices'
import { useLocalStorage } from 'react-use'
import { LOCAL_STORAGE_KEYS } from '@/constants'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DeviceCard } from '@/components/DeviceCard'
import Link from 'next/link'

const Home = () => {
  const router = useRouter()
  const [token] = useLocalStorage(LOCAL_STORAGE_KEYS.token)
  const [clientSecret] = useLocalStorage(LOCAL_STORAGE_KEYS.clientSecret)
  const hasToken = Boolean(token && clientSecret)

  const { data, isLoading } = useSWR<DevicesResponse>(
    hasToken ? '/api/devices' : null
  )

  useEffect(() => {
    if (!hasToken) {
      router.push('/token')
    }
  }, [hasToken, router])

  if (!hasToken) {
    return null
  }

  return (
    <Box py={4}>
      <HStack>
        <Text fontSize={'2xl'} fontWeight={'black'}>
          デバイス一覧
        </Text>
        <Spacer />
        <Link href={'/token'}>
          <Button
            fontWeight={'bold'}
            size={'sm'}
            variant={'outline'}
            borderWidth={2}
            borderColor={'black'}
          >
            トークン設定
          </Button>
        </Link>
      </HStack>

      <Grid gap={4} mt={2} p={1}>
        {isLoading ? (
          <Text>読み込み中...</Text>
        ) : data?.body.deviceList.length ? (
          data?.body.deviceList.map((device) => (
            <DeviceCard device={device} key={device.deviceId} />
          ))
        ) : (
          <Text>デバイスがありません</Text>
        )}
      </Grid>
    </Box>
  )
}

export default Home
