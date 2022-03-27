import { Getters } from './types'

export default {
  challengeLength: (state) => state.allChallenges.length,

  currentXpPercentage: (state) =>
    Number(((state.xp.current / state.xp.end) * 100).toFixed(2)),

  currentChallenge: (state) =>
    typeof state.currentChallengeIndex === 'number'
      ? state.allChallenges[state.currentChallengeIndex]
      : null,
} as Getters
