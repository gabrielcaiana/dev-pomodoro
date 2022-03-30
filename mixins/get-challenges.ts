export default {
  async asyncData({ app, store }: any) {
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
}
