export const IS_SERVER = typeof window === 'undefined'
export const IS_BROWSER = typeof window !== 'undefined'

export const API_HOST = 'https://api.switch-bot.com'

export const LOCAL_STORAGE_KEYS = {
  token: 'token',
  clientSecret: 'client-secret',
} as const

export const HEADERS_KEYS = {
  sbToken: 'x-switchbot-token',
  sbClientSecret: 'x-switchbot-client-secret',
} as const
