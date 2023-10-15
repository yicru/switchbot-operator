export type Command = Lock | Unlock | TurnOff | TurnOn | Press

type Lock = {
  commandType: 'command'
  command: 'lock'
}

type Unlock = {
  commandType: 'command'
  command: 'unlock'
}

type TurnOff = {
  commandType: 'command'
  command: 'turnOff'
}

type TurnOn = {
  commandType: 'command'
  command: 'turnOn'
}

type Press = {
  commandType: 'command'
  command: 'press'
}
