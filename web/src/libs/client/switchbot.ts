import { Command } from '@/types/switchbot/command'
import { Device } from '@/types/switchbot/device'

export const getCommandsByDevice = (device: Device): Command[] => {
  switch (device.deviceType) {
    case 'Smart Lock':
      return [
        { commandType: 'command', command: 'lock' },
        { commandType: 'command', command: 'unlock' },
      ]
    default:
      return []
  }
}
