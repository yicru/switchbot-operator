import {
  withSwitchBotClient,
  type WithSwitchBotClientHandler,
} from '@/libs/switchbot'
import { Device, InfraredRemote } from '@/types/switchbot/device'

export type DevicesResponse = {
  statusCode: number
  message: string
  body: {
    deviceList: Device[]
    infraredRemoteList: InfraredRemote[]
  }
}

const handler: WithSwitchBotClientHandler<DevicesResponse> = async (
  req,
  res,
  client
) => {
  const response = await client('/v1.0/devices')
  res.status(200).json(response)
}

export default withSwitchBotClient(handler)
