<template>
  <div v-if="show" class="overlay">
    <div class="dialog text-white">
      <BaseIcon name="x" class="icon" @click="close" />
      <h3 class="font-2xl mb-2 font-general-bold">
        Você deseja cancelar o ciclo?
      </h3>
      <BaseButton
        :small="true"
        :negative="true"
        @click="setCountdownState(false)"
        >Cancelar</BaseButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { Mutations as MutationsCountdown } from '~/store/Countdown/types'
export default Vue.extend({
  name: 'CycleAbortModal',

  data() {
    return {
      show: false,
    }
  },

  mounted() {
    this.$nuxt.$on('dialog', () => {
      this.show = true
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('dialog')
  },

  methods: {
    ...mapMutations({
      setCountdownHasCompleted: `Countdown/${MutationsCountdown.SET_HAS_COMPLETED}`,
      setCountdownIsActive: `Countdown/${MutationsCountdown.SET_IS_ACTIVE}`,
    }),

    setCountdownState(flag: boolean) {
      this.setCountdownHasCompleted(false)
      this.setCountdownIsActive(flag)
      this.close()
    },

    close() {
      debugger
      this.show = false
    },
  },
})
</script>

<style scoped>
.overlay {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgb(0 0 0 / 40%);
}

.dialog {
  width: 300px;
  background: #06234b;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
}

.icon {
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
}
</style>
