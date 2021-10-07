import { tools } from '@modular-rocks/core'
const { parentScopePath, clean } = tools

export default (loc, { dirname }) => {
  let scope = parentScopePath(loc.replace(dirname, ""))
  return scope.length ? clean(`${dirname}/${scope}/`) : `/`
}
