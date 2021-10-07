var isNode = typeof module !== 'undefined' && module.exports;

var dirname = function dirname() {
  return isNode ? __dirname : '';
};

import build from './build';
import rule from './rule';
build.rule = rule(dirname());
export default build;