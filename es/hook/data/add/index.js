export var write = function write(name, source, assets, ConcatSource) {
  return function (_ref) {
    var id = _ref.id,
        files = _ref.files;
    if (name !== id) return;
    var filename = Array.from(files)[0];
    var _source = assets[filename]._source;
    assets[filename]._source = new ConcatSource(source, _source);
  };
};
export default (function (compilation, source, ConcatSource) {
  return function (assets) {
    compilation.entrypoints.forEach(function (entrypoint, name) {
      entrypoint.chunks.map(write(name, source, assets, ConcatSource));
    });
  };
});