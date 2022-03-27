<template>
  <div class="bg-background h-screen">
    <!-- BaseIcon -->
    <BaseIcon name="arrow-right-circle" size="64" color="blue" />

    <!-- BaseButton -->
    <BaseButton :small="true" :transparent="true"> hello world</BaseButton>

    <!-- BaseCard -->
    <BaseCard> hello world </BaseCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  async asyncData({ app, store }) {
    try {
      const db = app.$fire.firestore
      const placeRef = db.collection('challenges')
      const snapshot = await placeRef.get()

      const items = snapshot.docs.map((doc: any) => {
        const item = doc.data()
        item.id = doc.id
        return item
      })

      store.commit('Challenges/SET_ALL_CHALLENGES', items)
    } catch (error) {
      console.log(error)
    }
  },
})
</script>
