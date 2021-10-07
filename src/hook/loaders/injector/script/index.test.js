import Script from './index.js'

describe("ModularRocks Webpack script", () => {
  test("Empty scope returns empty object", () => {
    const template = `
import WebRocks from '@modular-rocks/webpack';
let scope = WebRocks.get('/hello/', './test');\n  \n hello`
    const done = Script(' hello', undefined, undefined, {base: '/hello/'}, './test')
    expect(done).toEqual(template);
  });
});
