import locate from './index.js'

describe("ModularRocks Webpack script", () => {
  test("1", () => {
    const dirname = process.env.PWD
    const scope = locate(`${dirname}/my/fake/scope/file`, { dirname })
    expect(scope).toEqual(`${dirname}/my/fake/scope/`);
  });

  test("2", () => {
    const dirname = process.env.PWD
    const scope = locate(`${dirname}/my/fake/scope/file`, { dirname })

    expect('').toEqual(``);
  });
});
