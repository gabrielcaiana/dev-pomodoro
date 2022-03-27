import { State } from './types'

export const state = (): State => ({
  level: 1,
  xp: {
    current: 0,
    start: 0,
    end: 0,
  },
  completetedChallenge: 0,
  currentChallengeIndex: null,
  isLevelUpModalOpen: false,
  allChallenges: [],
})
