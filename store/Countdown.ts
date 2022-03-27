import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'countdown', stateFactory: true, namespaced: true })
export default class Projects extends VuexModule {
  private countdown = 0

  public get all() {
    return this.countdown
  }

  @Mutation
  private SET_ALL(countdown: number) {
    this.countdown = countdown
  }

  @Action
  public index(countdown: number) {
    this.context.commit('SET_ALL', countdown)
  }
}
