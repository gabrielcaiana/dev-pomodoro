<template>
  <button
    :class="{
      small: smallButton,
      transparent: transparent,
      negative: negative,
      disabled: disabled,
    }"
    class="base-button font-general-bold w-full text-white text-2xl px-1 py-8 hover:opacity-90 transition-all duration-300 rounded-md flex items-center justify-center"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseButton',

  props: {
    small: {
      type: Boolean,
      default: null,
    },

    transparent: {
      type: Boolean,
      default: null,
    },

    negative: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
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
}

.small {
  @apply h-8;
}

.transparent {
  background: transparent;
}

.negative {
  background: #fc6b6b;
}

.disabled {
  background: #d0d0d0;
  cursor: not-allowed;
  border: none;
}
</style>
