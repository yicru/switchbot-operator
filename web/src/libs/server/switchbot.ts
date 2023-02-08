import { v4 as uuidV4 } from 'uuid'
import crypto from 'node:crypto'
import { ofetch } from 'ofetch'
import { API_HOST, HEADERS_KEYS } from '@/constants'
import { NextApiRequest, NextApiResponse } from 'next'

export const createClient = (token: string, clientSecret: string) => {
  const t = Date.now().toString()
  const nonce = uuidV4()
  const data = token + t + nonce
  const signTerm = crypto
    .createHmac('sha256', clientSecret)
    .update(Buffer.from(data, 'utf-8'))
    .digest()
  const sign = signTerm.toString('base64')

  return ofetch.create({
    baseURL: API_HOST,
    headers: {
      Authorization: token,
      sign,
      nonce,
      t,
      'Content-Type': 'application/json; charset=utf8',
    },
  })
}

export type WithSwitchBotClientHandler<T = any> = (
  req: NextApiRequest,
  res: NextApiResponse<T>,
  client: ReturnType<typeof createClient>
) => unknown | Promise<unknown>

export const withSwitchBotClient = (handler: WithSwitchBotClientHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers[HEADERS_KEYS.sbToken]
    const clientSecret = req.headers[HEADERS_KEYS.sbClientSecret]

    if (typeof token !== 'string' || typeof clientSecret !== 'string') {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }

    const client = createClient(token, clientSecret)

    return handler(req, res, client)
  }
}
