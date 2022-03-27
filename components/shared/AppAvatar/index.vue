<template>
  <div class="app-avatar relative rounded-full">
    <img
      src="https://avatars.githubusercontent.com/u/26663338?v=4"
      alt="Gabriel Caiana"
      class="w-24 rounded-full p-1"
    />

    <div
      class="app-avatar-badge rounded-full absolute flex justify-center items-center font-general-bold"
    >
      {{ userLevel }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppAvatar',

  computed: {
    userLevel(): number {
      return this.$store.getters['Challenges/currentLevel']
    },
  },
})
</script>

<style lang="css" scoped>
.app-avatar {
  background: var(--gradient-text);
}

.app-avatar-badge {
  bottom: -10px;
  left: 35%;
  background: var(--gradient-text);
  width: 32px;
  height: 32px;
}
</style>
