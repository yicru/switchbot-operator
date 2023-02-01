import { Box, Grid, Text } from '@chakra-ui/react'
import useSWR from 'swr'
import { DevicesResponse } from '@/pages/api/devices'
import { useLocalStorage } from 'react-use'
import { LOCAL_STORAGE_KEYS } from '@/constants'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()
  const [token] = useLocalStorage(LOCAL_STORAGE_KEYS.token)
  const [clientSecret] = useLocalStorage(LOCAL_STORAGE_KEYS.clientSecret)
  const hasToken = Boolean(token && clientSecret)

  const { data } = useSWR<DevicesResponse>(hasToken ? '/api/devices' : null)

  useEffect(() => {
    if (!hasToken) {
      router.push('/token')
    }
  }, [hasToken, router])

  return (
    <Box py={4}>
      <Text fontSize={'2xl'} fontWeight={'black'}>
        デバイス一覧
      </Text>

      <Grid gap={2} mt={2}>
        {data?.body.deviceList.length ? (
          data?.body.deviceList.map((device) => (
            <Box
              py={2}
              px={4}
              rounded={'lg'}
              bg={'gray.50'}
              borderWidth={'1px'}
              borderColor={'gray.200'}
              key={device.deviceId}
            >
              <Text fontSize={'xs'}>{device.deviceType}</Text>
              <Text fontSize={'sm'} fontWeight={'bold'}>
                {device.deviceName}
              </Text>
            </Box>
          ))
        ) : (
          <Text>デバイスがありません</Text>
        )}
      </Grid>
    </Box>
  )
}

export default Home
