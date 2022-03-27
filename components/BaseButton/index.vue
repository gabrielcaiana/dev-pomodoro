<template>
  <button
    class="base-button font-general-bold"
    :class="{ small: smallButton, transparent: transparent }"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  props: {
    small: {
      type: Boolean,
      default: null,
    },

    transparent: {
      type: Boolean,
      default: null,
    },
  },

  computed: {
    smallButton(): boolean {
      return !!this.small
    },
  },
})
</script>

<style scoped>
.base-button {
  background: var(--gradient);
  border: 1px solid #ffb1ee;
  @apply w-full text-white text-2xl px-1 py-8 hover:opacity-90 transition-all duration-300 rounded-md flex items-center justify-center;
}

.small {
  @apply h-8;
}

.transparent {
  background: transparent;
}
</style>
