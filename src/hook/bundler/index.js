import { tools } from '@modular-rocks/core'
const { clean } = tools

const store = {bundler: [], dir: undefined}
const get = (key) => store[key]
const set = (key, value) => store[key] = value

const resolvePath = (path) => store.dir && store.dir.resolve(path) || path
const removeRelativeDot = (path) => path[0] == '.' && path.substr(1) || path
const extractScopedPath = (path, app) => {
  const re = new RegExp('^' + app)
  const keys = get('keys')
  keys[path] = path

  return {
    scopedPath: path.match(re) ? path.replace(base, '') : path,
    fullpath: path
  }
}

const resolve = (path, opts) => {
  const { base, app } = opts
  path = resolvePath(path)
  path = removeRelativeDot(path)
  return extractScopedPath(path, app)
}



const load = (meta, metadata, env) => {
  const filepath = clean([metadata.absolutePath, meta.filename].join('/'))
  const keys = get('keys')
  const dir = get('dir')
  const key = keys[filepath]
  const fn = dir(key)

  if (!fn) {
    throw Error('Filename not found at ' + filepath)
  }
  return fn.default || fn
}

export default {
  resolve,
  load,
  get,
  set
}
