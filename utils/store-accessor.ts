/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Countdown from '@/store/Countdown'

let countdown: Countdown

const initializeStores = (store: Store<any>): void => {
  countdown = getModule(Countdown, store)
}

export { initializeStores, countdown }
