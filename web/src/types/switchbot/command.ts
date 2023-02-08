export type Command = Lock | Unlock

type Lock = {
  commandType: 'command'
  command: 'lock'
}

type Unlock = {
  commandType: 'command'
  command: 'unlock'
}
