<template>
  <div>
    <span class="font-general-medium text-white text-xl">Meu progresso</span>
    <div class="text-white flex items-center justify-between mt-6">
      <span>20xp</span>
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
      <span>64xp</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ExperienceBar',
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
}
</style>
