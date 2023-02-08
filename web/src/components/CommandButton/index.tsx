import { Button, useToast } from '@chakra-ui/react'
import { Command } from '@/types/switchbot/command'
import { useMemo, useState } from 'react'
import { Device } from '@/types/switchbot/device'
import { useApiClientContext } from '@/providers/ApiClientProvider'

type Props = {
  device: Device
  command: Command
}

export const CommandButton = ({ device, command }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const apiClient = useApiClientContext()
  const toast = useToast()

  const label = useMemo(() => {
    switch (command.command) {
      case 'lock':
        return 'Lock'
      case 'unlock':
        return 'Unlock'
    }
  }, [command.command])

  const handleOnClick = async () => {
    setIsLoading(true)
    try {
      await apiClient('/api/command', {
        method: 'POST',
        body: JSON.stringify({
          deviceId: device.deviceId,
          command,
        }),
      })
    } catch (e) {
      toast({
        status: 'error',
        title: 'エラーが発生しました',
        description: e instanceof Error ? e.message : '',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button isLoading={isLoading} onClick={handleOnClick}>
      {label}
    </Button>
  )
}
