<template>
  <header class="app-header text-white">
    <div>
      <h1 class="app-header-title font-general-bold">
        <span>Dev</span> Pomodoro
      </h1>
      <p class="font-general-italic text-xl">
        Gerencie seu tempo e seja mais produtivo <br />
        utilizando o dev pomodoro
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppHeader',
})
</script>

<style lang="css" scoped>
.app-header-title span {
  background: linear-gradient(272.38deg, #43a5e3 46.06%, #ff56f6 81.53%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
