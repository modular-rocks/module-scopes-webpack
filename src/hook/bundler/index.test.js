import bundler from './index.js'

const dirKeys = {
  './two/three/four/hello.js': './two/three/four/hello.js',
  './two/three/hello.js': './two/three/hello.js',
  './two/hello.js': './two/hello.js'
}

const fn1 = () => '/one/two/three/four/'
const files = {
  './two/three/four/hello.js': fn1,
  './two/three/hello.js': () => '/one/two/three/',
  './two/hello.js': {default: () => '/one/two/'}
}

const fakeWebpackRequireContext = (files) => {
  const keys = () => Object.keys(files)
  const fn = (path) => files[path]
  fn.keys = keys
  return fn
}

describe("ModularRocks paper prep pipe meta", () => {
  test("meta returns function", () => {
    const dir = fakeWebpackRequireContext(files)
    const info = {
      filename: 'hello.js'
    }
    bundler.set('dir', dir)
    bundler.set('keys', dirKeys)
    const m = bundler.load(info, {absolutePath: './two/three/four/'})
    expect(m).toEqual(fn1);
  });
});
