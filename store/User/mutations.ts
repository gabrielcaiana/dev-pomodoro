import { Mutations, MutationsInterface } from './types'

export default {
  [Mutations.SET_CURRENT_USER](state, user) {
    state.user = {
      avatar: user.avatar,
      name: user.name,
      office: user.office,
    }
  },
} as MutationsInterface
