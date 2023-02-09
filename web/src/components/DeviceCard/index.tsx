import {
  Card,
  Box,
  ButtonGroup,
  HStack,
  Spacer,
  Text,
  CardBody,
} from '@chakra-ui/react'
import { Device } from '@/types/switchbot/device'
import { getCommandsByDevice } from '@/libs/client/switchbot'
import { CommandButton } from '@/components/CommandButton'

type Props = {
  device: Device
}

export const DeviceCard = ({ device }: Props) => {
  const commands = getCommandsByDevice(device)

  return (
    <Card size={'sm'} border={'2px black solid'} boxShadow={'4px 4px'}>
      <CardBody>
        <HStack>
          <Box>
            <Text fontSize={'xs'}>{device.deviceType}</Text>
            <Text fontSize={'md'} fontWeight={'black'}>
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
      </CardBody>
    </Card>
  )
}
