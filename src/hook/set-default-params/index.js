import { tools } from '@modular-rocks/core'
import { api } from '../../api'
const { clean } = tools
import bundler from '../../hook/bundler'

const warn = (option, value) => {
  if (!value || value && value.source) return
  const text = `You must add a regular expression as the ${option} option. Received: `
  console.warn(text, value)
}

export default (opts) => {
  const { path, app, regex, injectorRegex } = opts
  warn('regex', regex)
  warn('injectorRegex', injectorRegex)
  opts.regex = regex && regex.source ? regex : /\.jsx?$/
  opts.injectorRegex = injectorRegex && injectorRegex.source ? injectorRegex : opts.regex
  opts.pwd = process.env.PWD
  opts.dirname = process.env.PWD + path
  const base = `${process.env.PWD}/${path}${app ? `/${app}` : ''}`
  opts.base = clean(base)
  opts.bundler = bundler
  bundler.set('keys', {})
  return opts
}
