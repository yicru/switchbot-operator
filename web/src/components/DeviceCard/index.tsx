import { Box, ButtonGroup, HStack, Spacer, Text } from '@chakra-ui/react'
import { Device } from '@/types/switchbot/device'
import { getCommandsByDevice } from '@/libs/client/switchbot'
import { CommandButton } from '@/components/CommandButton'

type Props = {
  device: Device
}

export const DeviceCard = ({ device }: Props) => {
  const commands = getCommandsByDevice(device)

  return (
    <Box
      py={2}
      px={4}
      rounded={'lg'}
      bg={'gray.50'}
      borderWidth={'1px'}
      borderColor={'gray.200'}
    >
      <HStack>
        <Box>
          <Text fontSize={'xs'}>{device.deviceType}</Text>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            {device.deviceName}
          </Text>
        </Box>

        <Spacer />

        <ButtonGroup
          mt={2}
          variant={'outline'}
          colorScheme={'white'}
          size={'xs'}
        >
          {commands.map((command) => (
            <CommandButton
              device={device}
              key={command.command}
              command={command}
            />
          ))}
        </ButtonGroup>
      </HStack>
    </Box>
  )
}
