import { MutationTree } from 'vuex'

export interface User {
  avatar: string
  name: string
  office: string
}

export interface State {
  user: User
}

export interface Getters {
  currentUser: (state: State) => object
}

export enum Mutations {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_CURRENT_USER](state: State, parameter: User): void
}
