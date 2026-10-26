/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS test harness uses the existing TypeScript compiler. */
// Use the project's existing TypeScript compiler with Node's test runner; no new test dependency.
const ts = require('typescript');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
for (const ext of ['.ts', '.tsx']) {
  require.extensions[ext] = (mod, filename) => {
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
      fileName: filename,
    });
    mod._compile(outputText, filename);
  };
}
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function(id, ...args) {
  if (id.startsWith('@/')) id = path.join(__dirname, '..', id.slice(2));
  return originalResolve.call(this, id, ...args);
};
const originalLoad = Module._load;
Module._load = function(id, ...args) {
  // Next enforces this boundary at build time; Node tests run entirely server-side.
  if (id === 'server-only') return {};
  return originalLoad.call(this, id, ...args);
};
