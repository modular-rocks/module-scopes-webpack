import api from '../../../../api'
import core from '@modular-rocks/core'

export default (store) => {
  core.store.set(store.opts.base, 'store', store)
  api.callbacks.call(store)
  return store
}
