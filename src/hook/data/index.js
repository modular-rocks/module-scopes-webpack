import prepare from './prepare'
import add from './add'

const meta = {
  name: 'AddDataForModularRocks',
  stage: 'PROCESS_ASSETS_STAGE_ADDITIONS',
}

export default (compiler, opts) => {
  const ConcatSource = compiler.webpack.sources.ConcatSource
  const source = prepare(opts)

  compiler.hooks.make.tap('ModularRocksWebpackAddData', compilation => {
    const callback = add(compilation, source, ConcatSource)
    compilation.hooks.processAssets.tap(meta, callback);
  })
}
