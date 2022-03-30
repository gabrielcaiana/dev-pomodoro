<template>
  <main>
    <div class="flex gap-10 mt-10">
      <div class="w-full flex">
        <BaseCard>
          <Countdown @complete="getNewChallenge" />
          <BaseButton v-if="hasCountdownComplete" disabled
            >Ciclo completado</BaseButton
          >
          <BaseButton
            v-else-if="isCountdownActive"
            @click="setCountdownState(false)"
            >Abandonar Ciclo</BaseButton
          >
          <BaseButton v-else @click="setCountdownState(true)"
            >Iniciar Ciclo</BaseButton
          >
        </BaseCard>
      </div>

      <div class="w-full flex flex-col gap-10">
        <BaseCard>
          <ExperienceBar />
        </BaseCard>
        <ChallengesCompleted />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { Mutations as MutationsCountdown } from '~/store/Countdown/types'
import { playAudio, sendNotification } from '~/utils/index'
import getChallenges from '~/mixins/get-challenges'

export default Vue.extend({
  name: 'IndexPage',

  mixins: [getChallenges],

  head() {
    return {
      title: 'Bem vindo ao Dev pomodoro',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'O dev pomodoro é sua plataforma de produtividade para te auxiliar no dia a dia.',
        },
      ],
    }
  },

  computed: {
    ...mapState('Countdown', {
      hasCountdownComplete: 'hasCompleted',
      isCountdownActive: 'isActive',
    }),
  },

  mounted() {
    if ('Nofitication' in window) {
      Notification.requestPermission()
    }
  },

  methods: {
    ...mapMutations({
      setCountdownHasCompleted: `Countdown/${MutationsCountdown.SET_HAS_COMPLETED}`,
      setCountdownIsActive: `Countdown/${MutationsCountdown.SET_IS_ACTIVE}`,
    }),

    setCountdownState(flag: boolean) {
      this.setCountdownHasCompleted(false)
      this.setCountdownIsActive(flag)
    },

    getNewChallenge() {
      this.setCountdownHasCompleted(true)

      if (Notification?.permission === 'granted') {
        playAudio('/completed-challenge.mp3')
        sendNotification('Novo desafio', {
          body: 'Você iniciou um novo desafio',
          icon: '/favicon.png',
        })
      }
    },
  },
})
</script>
