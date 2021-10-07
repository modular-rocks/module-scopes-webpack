const isNode = typeof module !== 'undefined' && module.exports
const dirname = () => isNode ? __dirname : ''

import build from './build'
import rule from './rule'

build.rule = rule(dirname())

export default build
