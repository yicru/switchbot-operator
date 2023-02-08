import {
  withSwitchBotClient,
  type WithSwitchBotClientHandler,
} from '@/libs/server/switchbot'
import { Command } from '@/types/switchbot/command'

export type CommandRequest = {
  deviceId: string
  command: Command
}

export type CommandResponse = {
  statusCode: number
  message: string
  body: object
}

const handler: WithSwitchBotClientHandler<CommandResponse> = async (
  req,
  res,
  client
) => {
  const { deviceId, command } = req.body as CommandRequest

  const response = await client(`/v1.1/devices/${deviceId}/commands`, {
    method: 'POST',
    body: command,
  })

  res.status(200).json(response)
}

export default withSwitchBotClient(handler)
