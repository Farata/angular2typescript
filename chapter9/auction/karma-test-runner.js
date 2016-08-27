Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {};

function resolveTestFiles() {
  return Object.keys(window.__karma__.files)
      .filter(function (path) { return /\.spec\.ts$/.test(path); })
      .map(function (moduleName) { return System.import(moduleName); });
}

Promise.
  all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ]).
  then(function (modules) {
    var testing = modules[0];
    var browser = modules[1];

    testing.TestBed.initTestEnvironment(
        browser.BrowserDynamicTestingModule,
        browser.platformBrowserDynamicTesting());
  }).
  then(function () { return Promise.all(resolveTestFiles()); }).
  then(function () { __karma__.start(); },
       function (error) { __karma__.error(error.stack || error); });