<template>
  <p class="digits w-1/2 flex gap-x-1">
    <span
      v-for="(digit, index) in splittedDigits"
      :key="index"
      class="digit"
      v-text="digit"
    ></span>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
import { splitValue } from '~/utils/index'
export default Vue.extend({
  name: 'CountdownDigits',

  props: {
    degits: {
      type: Number,
      required: true,
    },
  },

  computed: {
    splittedDigits(): string[] {
      return splitValue(this.degits)
    },
  },
})
</script>

<style scoped>
.digits {
  height: 140px;
  display: flex;
  gap: 1rem;
}

.digit {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-card);
  height: 100%;
  width: 100%;
  font-size: 80px;
  font-weight: bold;
  color: white;
}
</style>
