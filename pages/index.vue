<template>
  <div class="bg-background h-screen">
    <div class="container m-auto p-14">
      <AppHeader />

      <main>
        <div class="flex gap-10 mt-10">
          <div class="w-full flex">
            <BaseCard></BaseCard>
          </div>

          <div class="w-full flex flex-col gap-10">
            <BaseCard>
              <ProgressBar />
            </BaseCard>
            <ChallengesCompleted />
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
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
