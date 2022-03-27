<template>
  <div class="bg-background h-screen">
    <!-- BaseIcon -->
    <BaseIcon name="arrow-right-circle" size="64" color="blue" />

    <!-- BaseButton -->
    <BaseButton :small="true" :transparent="true" @click="hello">
      hello world</BaseButton
    >

    <!-- BaseCard -->
    <BaseCard> hello world </BaseCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  methods: {
    hello() {
      console.log('hello world')
    },
  },
})
</script>
