import { get as find } from '@modular-rocks/core';
import build from '.././builder';
var invoked = false;

var invoke = function invoke() {
  build();
  invoked = true;
};

var get = function get(root, scope) {
  if (!invoked) invoke();
  return find(root, scope);
};

export default get;