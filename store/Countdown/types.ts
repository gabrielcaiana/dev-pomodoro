import { MutationTree } from 'vuex'

export interface State {
  time: number
  timeSelected: number
  isActive: boolean
  hasCompleted: boolean
}

export interface Getters {
  minutes: (state: State) => number
  seconds: (state: State) => number
  timeSelected: (state: State) => number
}

export enum Mutations {
  SET_TIME = 'SET_TIME',
  SET_TIME_SELECTED = 'SET_TIME_SELECTED',
  RESET_TIME = 'RESET_TIME',
  SET_IS_ACTIVE = 'SET_IS_ACTIVE',
  SET_HAS_COMPLETED = 'SET_HAS_COMPLETED',
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_TIME](state: State, parameter: number): void
  [Mutations.SET_TIME_SELECTED](state: State, parameter: number): void
  [Mutations.RESET_TIME](state: State, parameter: number): void
  [Mutations.SET_IS_ACTIVE](state: State, parameter: boolean): void
  [Mutations.SET_HAS_COMPLETED](state: State, parameter: boolean): void
}
