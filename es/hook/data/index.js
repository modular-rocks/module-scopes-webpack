import prepare from './prepare';
import add from './add';
var meta = {
  name: 'AddDataForModularRocks',
  stage: 'PROCESS_ASSETS_STAGE_ADDITIONS'
};
export default (function (compiler, opts) {
  var ConcatSource = compiler.webpack.sources.ConcatSource;
  var source = prepare(opts);
  compiler.hooks.make.tap('ModularRocksWebpackAddData', function (compilation) {
    var callback = add(compilation, source, ConcatSource);
    compilation.hooks.processAssets.tap(meta, callback);
  });
});