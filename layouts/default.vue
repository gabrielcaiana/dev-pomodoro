<template>
  <div class="bg-background">
    <div class="container m-auto p-14">
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LayoutDefault',
})
</script>
