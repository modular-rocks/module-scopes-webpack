export const write = (entrypointName, source, assets, ConcatSource) => ({ name, files }) => {
  if (entrypointName !== name) return
  const filename = Array.from(files).filter((x) => x.match('js'))[0]
  const _source = assets[filename]._source
  assets[filename]._source = new ConcatSource(source, _source)
}

export default (compilation, source, ConcatSource) => (assets) => {
  compilation.entrypoints.forEach((entrypoint, name) => {
    entrypoint.chunks.map(write(name, source, assets, ConcatSource))
  })
}
