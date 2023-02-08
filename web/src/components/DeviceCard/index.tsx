import { Box, Text } from '@chakra-ui/react'
import { Device } from '@/types/switchbot/device'

type Props = {
  device: Device
}

export const DeviceCard = ({ device }: Props) => {
  return (
    <Box
      py={2}
      px={4}
      rounded={'lg'}
      bg={'gray.50'}
      borderWidth={'1px'}
      borderColor={'gray.200'}
    >
      <Text fontSize={'xs'}>{device.deviceType}</Text>
      <Text fontSize={'sm'} fontWeight={'bold'}>
        {device.deviceName}
      </Text>
    </Box>
  )
}
