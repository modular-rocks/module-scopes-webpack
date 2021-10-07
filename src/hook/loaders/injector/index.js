import core from '@modular-rocks/core'
import locate from './locate'
import script from './script'
import api from '../../.././api'

const Injector = function(source, map, meta) {
  const loc = this.resource || this.resourcePath
  const scope = loc ? locate(loc, this.query.opts) : '/'

  source = api.injectors.call(source, map, loc, this.query.opts, scope)
  source = script(source, map, loc, this.query.opts, scope)

  return source
}


export default Injector
