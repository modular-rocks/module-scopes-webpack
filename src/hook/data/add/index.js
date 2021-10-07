export const write = (name, source, assets, ConcatSource) => ({ id, files }) => {
  if (name !== id) return
  const filename = Array.from(files)[0]
  const _source = assets[filename]._source
  assets[filename]._source = new ConcatSource(source, _source)
}

export default (compilation, source, ConcatSource) => (assets) => {
  compilation.entrypoints.forEach((entrypoint, name) => {
    entrypoint.chunks.map(write(name, source, assets, ConcatSource))
  })
}
