<template>
  <div>
    <AppSubtitle>Meu progresso</AppSubtitle>
    <div class="text-white flex items-center justify-between mt-6">
      <span v-text="`${getExperience.start}xp`"></span>
      <div class="progress-bar">
        <div
          v-if="showPercentage"
          class="progress"
          :style="{ width: `${currentXpPercentage}%` }"
        >
          <span
            v-if="showPercentage"
            v-text="`${getExperience.current}xp (${currentXpPercentage}%)`"
          ></span>
        </div>
      </div>
      <span v-text="`${getExperience.end}xp`"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import Vue from 'vue'
export default Vue.extend({
  name: 'ExperienceBar',

  computed: {
    ...mapGetters({
      currentXpPercentage: 'Challenges/currentXpPercentage',
      getExperience: 'Challenges/getExperience',
    }),

    showPercentage() {
      return this.currentXpPercentage > 0
    },
  },
})
</script>

<style scoped>
.progress-bar {
  background: var(--gradient-card);
  border-radius: 1rem;
  width: 100%;
  height: 20px;
  margin: 0 1rem;
}

.progress {
  background: var(--gradient-text);
  height: 100%;
  width: 40%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.5rem;
  position: relative;
}

.progress span {
  position: absolute;
  top: 25px;
  font-size: 0.875rem;
  width: max-content;
}
</style>
