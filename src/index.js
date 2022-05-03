import ModularRocks from '@modular-rocks/core'

var isOnNodeJs = false;
if (typeof process != "undefined") {
  isOnNodeJs = true;
}

import api from './api'
import get from './hook/loaders/injector/script/get'

let obj = {api, get, ModularRocks}

if (isOnNodeJs) {
  const Hook = require('./hook')
  obj = {...obj, Hook}
}

export default obj
