export default (function (source, map, loc, opts, scope) {
  if (opts && opts.injector) {
    return opts.injector(source, map, loc, opts, scope);
  }

  return "\nimport WebRocks from '@modular-rocks/webpack';\nlet scope = WebRocks.get('" + opts.base + "', '" + scope + "');\n  \n" + source;
});