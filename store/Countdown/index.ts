import { State } from './types'
import { MINUTES } from '~/constants/index'

export const state = (): State => ({
  time: MINUTES * 60,
  isActive: false,
  hasCompleted: false,
})
