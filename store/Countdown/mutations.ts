import { Mutations, MutationsInterface } from './types'
import { MINUTES } from '~/constants/index'

export default {
  [Mutations.SET_TIME](state, newTime) {
    state.time = newTime
  },
  [Mutations.RESET_TIME](state) {
    state.time = MINUTES * 60
  },
  [Mutations.SET_IS_ACTIVE](state, isActive) {
    state.isActive = isActive
  },
  [Mutations.SET_HAS_COMPLETED](state, hasCompleted) {
    state.hasCompleted = hasCompleted
  },
} as MutationsInterface
