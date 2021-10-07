import core from '@modular-rocks/core';
import traverse from './traverse';
import script from './script';
import save from './save';
export default (function (opts) {
  var collection = traverse(opts.base, []);

  var _core$prepare = core.prepare(collection, opts),
      scoped = _core$prepare.scoped,
      refined = _core$prepare.refined;

  return script(save({
    scoped: scoped,
    refined: refined,
    opts: opts
  }));
});