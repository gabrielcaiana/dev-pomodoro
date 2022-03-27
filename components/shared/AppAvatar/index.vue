<template>
  <div class="flex items-center justify-center gap-6">
    <div class="font-general-variable">
      <p class="text-primary-light m-0" v-text="currentUser.name"></p>
      <p class="m-0" v-text="currentUser.office"></p>
    </div>
    <div class="app-avatar relative rounded-full">
      <img
        :src="currentUser.avatar"
        :alt="currentUser.name"
        class="w-24 rounded-full p-1"
      />

      <div
        class="app-avatar-badge rounded-full absolute flex justify-center items-center font-general-bold"
      >
        {{ userLevel }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import Vue from 'vue'
export default Vue.extend({
  name: 'AppAvatar',

  computed: {
    ...mapGetters({
      userLevel: 'Challenges/currentLevel',
      currentUser: 'User/currentUser',
    }),
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
