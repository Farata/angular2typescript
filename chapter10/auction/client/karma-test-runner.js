Error.stackTraceLimit = Infinity;

require('reflect-metadata');
require('zone.js/dist/zone.js');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
    browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

Object.assign(global, testing);


var testContext = require.context('./src', true, /\.spec\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
