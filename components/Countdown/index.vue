<template>
  <div class="flex justify-center items-center font-general-bold">
    <CountdownDigits :degits="minutes" />
    <span class="px-2 text-white text-3xl mb-4">:</span>
    <CountdownDigits :degits="seconds" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { Mutations } from '~/store/Countdown/types'

let refTimeout: ReturnType<typeof setTimeout>

export default Vue.extend({
  name: 'AppCountdown',

  computed: {
    ...mapState('Countdown', ['time', 'isActive']),
    ...mapGetters('Countdown', ['minutes', 'seconds']),
  },

  watch: {
    isActive(newValue: boolean) {
      this.runCountdown(newValue)

      if (!newValue) this.resetTime()
    },

    time(newValue) {
      if (newValue > 0) {
        this.runCountdown(true)
      } else {
        this.$emit('completed')
      }
    },
  },

  methods: {
    ...mapMutations('Countdown', {
      setTime: Mutations.SET_TIME,
      resetTime: Mutations.RESET_TIME,
    }),

    runCountdown(flag: boolean) {
      if (this.isActive && flag) {
        refTimeout = setTimeout(() => this.setTime(this.time - 1), 1000)
      } else {
        clearTimeout(refTimeout)
      }
    },
  },
})
</script>
