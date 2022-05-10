import setDefaultParams from './set-default-params';
import fallbacks from './fallbacks';
import loaders from './loaders';
import data from './data';

var Hook = /*#__PURE__*/function () {
  function Hook(opts) {
    if (opts === void 0) {
      opts = {};
    }

    this.opts = setDefaultParams(opts);
  }

  var _proto = Hook.prototype;

  _proto.apply = function apply(compiler) {
    fallbacks(compiler, this.opts);
    loaders(compiler, this.opts, {});
    data(compiler, this.opts);
  };

  return Hook;
}();

export default Hook;