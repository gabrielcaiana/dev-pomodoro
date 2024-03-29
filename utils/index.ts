export const splitValue = (value: string | number, padSize: number = 2) =>
  `${value}`.padStart(padSize, '0').split('')

export const playAudio = (path: string) => new Audio(path).play()

export const sendNotification = (title: string, options: object) =>
  new Notification(title, options)
