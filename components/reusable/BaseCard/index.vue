<template>
  <div class="base-card w-full rounded-md p-8">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseCard',
})
</script>

<style scoped>
.base-card {
  background: var(--gradient-card);
  border: 2px solid #ffffff65;
}
</style>
