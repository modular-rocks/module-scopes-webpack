const store = {}

const add = (key) => (objs) => objs && objs.map((o) => store[key].push(o))
const get = (key) => () => store[key]
const Factory = (key, call) => {
  store[key] = store[key] ? store[key] : (store[key] = [])
  return {
    add: add(key),
    get: get(key),
    call: call(key)
  }
}

const callLoaders = (key) => (source, opts) => {
  store[key].map((loader) => source = loader(source, opts))
  return source
}

const callbacks = Factory('callbacks', (key) => (_store) => {
  store.callbacks.map((callback) => callback(_store))
})

const injectors = Factory('injectors', callLoaders)
const initializers = Factory('initializers', callLoaders)

export default {
  callbacks,
  initializers,
  injectors,
}
