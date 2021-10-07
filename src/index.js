var isOnNodeJs = false;
if (typeof process != "undefined") {
  isOnNodeJs = true;
}

import api from './api'
import get from './hook/loaders/injector/script/get'

let obj = {api, get}

if (isOnNodeJs) {
  const Hook = require('./hook')
  obj = {...obj, Hook}
}

export default obj
