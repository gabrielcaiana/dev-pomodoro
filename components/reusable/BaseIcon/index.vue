<template>
  <div v-on="$listeners">
    <i :height="size" :width="size" :data-feather="name" :stroke="color"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseIcon',

  props: {
    name: {
      type: String,
      default: null,
    },

    color: {
      type: String,
      default: 'white',
    },

    size: {
      type: String,
      default: '24',
    },
  },
})
</script>
