<template>
  <main>
    <div class="flex gap-10 mt-10">
      <div class="w-full flex">
        <BaseCard>
          <Countdown @completed="getNewChallenge" />
          <div class="flex gap-4 mb-4">
            <CountdownTime
              v-for="(minutes, index) in MINUTES"
              :key="index"
              :time="minutes"
              :disabled="isCountdownActive"
              @click.native="setTime(minutes)"
            />
          </div>
          <BaseButton v-if="hasCountdownComplete" :disabled="true"
            >Ciclo completado</BaseButton
          >
          <BaseButton
            v-else-if="isCountdownActive"
            :negative="true"
            @click="showDialog"
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

      <CycleAbortModal />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { Mutations as MutationsCountdown } from '~/store/Countdown/types'
import { playAudio, sendNotification } from '~/utils'
import getChallenges from '~/mixins/get-challenges'
import abortDialog from '~/mixins/abortDialog'
import { MINUTES } from '~/constants'

export default Vue.extend({
  name: 'IndexPage',

  mixins: [getChallenges, abortDialog],

  data() {
    return {
      MINUTES,
    }
  },

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
    if ('Notification' in window) {
      Notification.requestPermission()
    }
  },

  methods: {
    ...mapMutations({
      setCountdownHasCompleted: `Countdown/${MutationsCountdown.SET_HAS_COMPLETED}`,
      setCountdowTime: `Countdown/${MutationsCountdown.SET_TIME}`,
      setCountdowTimeSelected: `Countdown/${MutationsCountdown.SET_TIME_SELECTED}`,
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
        sendNotification('Novo desafio!', {
          body: 'Você iniciou um novo desafio',
          icon: '/favicon.png',
        })
      }
    },

    setTime(time: number) {
      if (!this.isCountdownActive) {
        const data = time * 60
        this.setCountdowTime(data)
        this.setCountdowTimeSelected(time)
      }
    },
  },
})
</script>
