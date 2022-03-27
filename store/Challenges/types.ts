import { MutationTree } from 'vuex'

export interface XP {
  current: number
  start: number
  end: number
}

export interface Challenge {
  type: string
  description: string
  amount: number
}

export interface Cookie {
  level: number
  xp: XP
  completedChallenges: number
}

export interface State {
  level: number
  xp: XP
  completetedChallenge: number
  currentChallengeIndex: number | null
  isLevelUpModalOpen: boolean
  allChallenges: Challenge[]
}

export interface Getters {
  allChallenges: (state: State) => []
  challengeLength: (state: State) => number
  currentXpPercentage: (state: State) => number
  currentChallenge: (state: State) => Challenge | null
}

export enum Mutations {
  SET_CURRENT_CHALLENGE_INDEX = 'SET_CURRENT_CHALLENGE_INDEX',
  SET_ALL_CHALLENGES = 'SET_ALL_CHALLENGES',
  SET_IS_LEVEL_UP_MODAL_OPEN = ' SET_IS_LEVEL_UP_MODAL_OPEN',
  COMPLETE_CHALLENGE = 'COMPLETE_CHALLENGE',
  SAVE_COOKIE_DATA = ' SAVE_COOKIE_DATA',
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_CURRENT_CHALLENGE_INDEX](state: State, parameter: number): void
  [Mutations.SET_ALL_CHALLENGES](state: State, parameter: []): void
  [Mutations.SET_IS_LEVEL_UP_MODAL_OPEN](state: State, parameter: boolean): void
  [Mutations.COMPLETE_CHALLENGE](state: State, parameter: number): void
  [Mutations.SAVE_COOKIE_DATA](state: State, parameter: Cookie): void
}
