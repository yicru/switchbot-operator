export type Device =
  | Bot
  | Curtain
  | Hub
  | Meter
  | MeterPlus
  | Lock
  | Keypad
  | KeypadTouch
  | Remote
  | MotionSensor
  | ContactSensor
  | CeilingLight
  | CeilingLightPro
  | PlugMiniUs
  | PlugMiniJp
  | Plug
  | StripLight
  | ColorBulb
  | RobotVacuumCleanerS1
  | RobotVacuumCleanerS1Plus
  | Humidifier
  | IndoorCam
  | Pan_TiltCam
  | Pan_TiltCam2K
  | BlindTilt

export type InfraredRemote = {
  deviceId: string
  deviceName: string
  remoteType: string
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#bot
 */
export type Bot = {
  deviceId: string
  deviceName: string
  deviceType: 'Bot'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#curtain
 */
export type Curtain = {
  deviceId: string
  deviceName: string
  deviceType: 'Curtain'
  enableCloudService: boolean
  hubDeviceId: string
  curtainDevicesIds: string[]
  calibrate: boolean
  group: boolean
  master: boolean
  openDirection: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#hubhub-plushub-mini
 */
export type Hub = {
  deviceId: string
  deviceName: string
  deviceType: 'Hub' | 'Hub Plus' | 'Hub Mini'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#meter
 */
export type Meter = {
  deviceId: string
  deviceName: string
  deviceType: 'Meter'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#meter-plus
 */
export type MeterPlus = {
  deviceId: string
  deviceName: string
  deviceType: 'MeterPlus'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#lock
 */
export type Lock = {
  deviceId: string
  deviceName: string
  deviceType: 'Smart Lock'
  enableCloudService: boolean
  hubDeviceId: string
  group: boolean
  master: boolean
  groupName: boolean
  lockDevicesIds: string[]
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#keypad
 */
export type Keypad = {
  deviceId: string
  deviceName: string
  deviceType: 'Keypad'
  enableCloudService: boolean
  hubDeviceId: string
  lockDeviceId: string
  keyList: {
    id: number
    name: string
    type: string
    password: string
    iv: string
    status: string
    createTime: string
  }
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#keypad-touch
 */
export type KeypadTouch = {
  deviceId: string
  deviceName: string
  deviceType: 'Keypad Touch'
  enableCloudService: boolean
  hubDeviceId: string
  lockDeviceId: string
  keyList: {
    id: number
    name: string
    type: string
    password: string
    iv: string
    status: string
    createTime: string
  }
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#remote
 */
export type Remote = {
  deviceId: string
  deviceName: string
  deviceType: 'Remote'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#remote
 */
export type MotionSensor = {
  deviceId: string
  deviceName: string
  deviceType: 'Motion Sensor'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#contact-sensor
 */
export type ContactSensor = {
  deviceId: string
  deviceName: string
  deviceType: 'Contact Sensor'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#ceiling-light
 */
export type CeilingLight = {
  deviceId: string
  deviceName: string
  deviceType: 'Ceiling Light'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#ceiling-light-pro
 */
export type CeilingLightPro = {
  deviceId: string
  deviceName: string
  deviceType: 'Ceiling Light Pro'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#plug-mini-us
 */
export type PlugMiniUs = {
  deviceId: string
  deviceName: string
  deviceType: 'Plug Mini (US)'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#plug-mini-jp
 */
export type PlugMiniJp = {
  deviceId: string
  deviceName: string
  deviceType: 'Plug Mini (JP)'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#plug
 */
export type Plug = {
  deviceId: string
  deviceName: string
  deviceType: 'Plug'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#strip-light
 */
export type StripLight = {
  deviceId: string
  deviceName: string
  deviceType: 'Strip Light'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#color-bulb
 */
export type ColorBulb = {
  deviceId: string
  deviceName: string
  deviceType: 'Color Bulb'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#robot-vacuum-cleaner-s1
 */
export type RobotVacuumCleanerS1 = {
  deviceId: string
  deviceName: string
  deviceType: 'Robot Vacuum Cleaner S1'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#robot-vacuum-cleaner-s1-plus
 */
export type RobotVacuumCleanerS1Plus = {
  deviceId: string
  deviceName: string
  deviceType: 'Robot Vacuum Cleaner S1 Plus'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#humidifier
 */
export type Humidifier = {
  deviceId: string
  deviceName: string
  deviceType: 'Humidifier'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#indoor-cam
 */
export type IndoorCam = {
  deviceId: string
  deviceName: string
  deviceType: 'Indoor Cam'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#pantilt-cam
 */
export type Pan_TiltCam = {
  deviceId: string
  deviceName: string
  deviceType: 'Pan/Tilt Cam'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#pantilt-cam-2k
 */
export type Pan_TiltCam2K = {
  deviceId: string
  deviceName: string
  deviceType: 'Pan/Tilt Cam'
  enableCloudService: boolean
  hubDeviceId: string
}

/**
 * @see https://github.com/OpenWonderLabs/SwitchBotAPI#blind-tilt
 */
export type BlindTilt = {
  deviceId: string
  deviceName: string
  deviceType: 'Blind Tilt'
  version: number
  enableCloudService: boolean
  hubDeviceId: string
  blindTiltDevicesIds: string[]
  calibrate: boolean
  group: boolean
  master: boolean
  direction: string
  slidePosition: number
}
