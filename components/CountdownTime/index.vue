<template>
  <div
    class="time font-general-bold"
    :class="{ 'is-transparent': timeSelected !== time, disabled: disabled }"
  >
    <span v-text="time"></span>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import Vue from 'vue'
export default Vue.extend({
  name: 'CountdownTime',

  props: {
    time: {
      type: Number,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: null,
    },
  },

  computed: {
    ...mapGetters('Countdown', ['timeSelected']),
  },
})
</script>

<style scoped>
.time {
  border: 2px solid #ffb1ee;
  border-radius: 8px;
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 500ms;
}

.time:hover {
  background: var(--gradient);
}

.is-transparent {
  opacity: 0.2;
}

.disabled {
  cursor: not-allowed;
}

.disabled:hover {
  background: none;
}
</style>
