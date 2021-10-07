import { get as find } from '@modular-rocks/core'
import build from '.././builder'

let invoked = false

const invoke = () => {
  build()
  invoked = true
}

const get = (root, scope) => {
  if (!invoked) invoke()
  return find(root, scope)
}

export default get
