import injector from './index.js'
import api from '../../../api'

const injector1 = function(source, opts, store) {
  return source + ' injector1'
}

const injector2 = function(source, opts, store) {
  return source + ' injector2'
}

const Faker = class FakeWebpack {
  constructor(resource, opts) {
    this.resource = resource
    this.query = { opts }
  }
}

describe("ModularRocks Webpack script", () => {
 test("1", function() {
   const url = `${__dirname}/my/fake/scope/test.jsx`
   const dirname = process.env.PWD
   const opts = { dirname: __dirname, base: '/hello/' }
   const fake = new Faker(url, opts)
   const result = injector.call(fake, 'source example', {sources: [url]})
   const expected = `
import WebRocks from '@modular-rocks/webpack';
let scope = WebRocks.get('/hello/', '${__dirname}/my/fake/scope/');\n  \nsource example`
   expect(result).toEqual(expected);
 });

 test("2", function() {
   const url = `${__dirname}/my/fake/scope/test.jsx`
   const dirname = process.env.PWD
   const opts = { dirname: __dirname, base: '/hello/' }
   const fake = new Faker(url, opts)
   api.injectors.add([injector1, injector2])
   const result = injector.call(fake, 'source example', {sources: [url]})
   const expected = `
import WebRocks from '@modular-rocks/webpack';
let scope = WebRocks.get('/hello/', '${__dirname}/my/fake/scope/');\n  \nsource example injector1 injector2`
   expect(result).toEqual(expected);
 });
});
