Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {};

System.config({
  transpiler: 'typescript',
  packages: {'base/app': {defaultExtension: 'ts'}}
});

function resolveTestFiles() {
  return Object.keys(window.__karma__.files)
      .filter(function (path) { return /\.spec\.ts$/.test(path); })
      .map(function (moduleName) { return System.import(moduleName); });
}

Promise.
  all([
    System.import('angular2/testing'),
    System.import('angular2/platform/testing/browser')
  ]).
  then(function (modules) {
    var testing = modules[0];
    var browser = modules[1];

    testing.setBaseTestProviders(
      browser.TEST_BROWSER_PLATFORM_PROVIDERS,
      browser.TEST_BROWSER_APPLICATION_PROVIDERS);
  }).
  then(function () { return Promise.all(resolveTestFiles()); }).
  then(function () { __karma__.start(); },
       function (error) { __karma__.error(error.stack || error); });