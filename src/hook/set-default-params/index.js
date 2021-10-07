import { tools } from '@modular-rocks/core'
import { api } from '../../api'
const { clean } = tools

export default (opts) => {
  const { path, app } = opts
  opts.pwd = process.env.PWD
  opts.dirname = process.env.PWD + path
  opts.regex = opts.regex || /\.jsx?$/
  const base = `${process.env.PWD}/${path}${app ? `/${app}` : ''}`
  opts.base = clean(base)
  return opts
}
