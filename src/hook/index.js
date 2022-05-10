import setDefaultParams from './set-default-params'
import fallbacks from './fallbacks'
import loaders from './loaders'
import data from './data'

class Hook {
  constructor(opts={}) {
    this.opts = setDefaultParams(opts)
  }

  apply(compiler) {
    fallbacks(compiler, this.opts)
    loaders(compiler, this.opts, {})
    data(compiler, this.opts)
  }
}

export default Hook
