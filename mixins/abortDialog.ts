import Vue from 'vue'
export default Vue.extend({
  methods: {
    showDialog() {
      this.$nuxt.$emit('dialog')
    },
  },
})
