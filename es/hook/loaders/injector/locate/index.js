import { tools } from '@modular-rocks/core';
var parentScopePath = tools.parentScopePath,
    clean = tools.clean;
export default (function (loc, _ref) {
  var dirname = _ref.dirname;
  var scope = parentScopePath(loc.replace(dirname, ""));
  return scope.length ? clean(dirname + "/" + scope + "/") : "/";
});