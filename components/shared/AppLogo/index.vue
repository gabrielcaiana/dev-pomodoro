<template>
  <div class="app-logo">
    <h1 class="app-logo-title font-general-bold"><span>Dev</span> Pomodoro</h1>
    <p class="font-general-italic text-xl">
      Gerencie seu tempo e seja mais produtivo <br />
      utilizando o dev pomodoro
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppLogo',
})
</script>

<style scoped>
.app-logo-title span {
  background: var(--gradient-text);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
