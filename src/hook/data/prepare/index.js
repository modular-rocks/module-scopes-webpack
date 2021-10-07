import core from '@modular-rocks/core'
import traverse from './traverse'
import script from './script'
import save from './save'

export default (opts) => {
  let collection = traverse(opts.base, [])
  const { scoped, refined } = core.prepare(collection, opts)
  return script(save({ scoped, refined, opts }))
}
