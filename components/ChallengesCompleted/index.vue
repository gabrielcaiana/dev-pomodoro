<template>
  <BaseCard>
    <h2 class="font-general-regular text-white">
      conclua os ciclos para receber novos desafios
    </h2>
    <div class="flex justify-between text-white font-general-light-italic mt-4">
      <span>Concluídos</span>
      <span v-text="completetedChallenge"></span>
    </div>
  </BaseCard>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import Vue from 'vue'
export default Vue.extend({
  name: 'ChallengesCompleted',

  computed: {
    ...mapGetters({
      completetedChallenge: 'Challenges/getCompletedChallenges',
    }),
  },
})
</script>
