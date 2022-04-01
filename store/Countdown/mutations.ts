import { Mutations, MutationsInterface } from './types'

export default {
  [Mutations.SET_TIME](state, newTime) {
    state.time = newTime
  },
  [Mutations.SET_TIME_SELECTED](state, time) {
    state.timeSelected = time
  },
  [Mutations.RESET_TIME](state, time) {
    state.time = time * 60
  },
  [Mutations.SET_IS_ACTIVE](state, isActive) {
    state.isActive = isActive
  },
  [Mutations.SET_HAS_COMPLETED](state, hasCompleted) {
    state.hasCompleted = hasCompleted
  },
} as MutationsInterface
