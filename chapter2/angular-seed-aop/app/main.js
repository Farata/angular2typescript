"use strict";
// The browser platform without a compiler
var platform_browser_1 = require('@angular/platform-browser');
// The app module factory produced by the static offline compiler
var app_module_ngfactory_1 = require('./app.module.ngfactory');
// Launch with the app module factory.
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
