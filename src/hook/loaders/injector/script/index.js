export default (source, map, loc, opts, scope) => {
  if (opts && opts.injector) {
    return opts.injector(source, map, loc, opts, scope)
  }

  return `
import WebRocks from '@modular-rocks/webpack';
let scope = WebRocks.get('${opts.base}', '${scope}');
  \n` + source
}
