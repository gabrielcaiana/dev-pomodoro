<template>
  <div class="base-card w-full rounded-md p-8">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped>
.base-card {
  background: var(--gradient-card);
  border: 1px solid #ffffff65;
}
</style>
