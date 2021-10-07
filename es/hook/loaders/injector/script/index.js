export default (function (source, map, loc, opts, scope) {
  if (opts.injector) {
    return opts.injector(source, map, loc, opts, scope);
  }

  return "\n    import WebRocks from '@modular-rocks/webpack';\n    let scope = WebRocks.get('" + opts.base + "', '" + scope + "');\n  \n" + source;
});