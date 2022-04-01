import { State } from './types'

export const state = (): State => ({
  time: 25 * 60,
  timeSelected: 25,
  isActive: false,
  hasCompleted: false,
})
