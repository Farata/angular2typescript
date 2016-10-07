import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app.module.ngfactory';

if (webpack.ENV === 'production') {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
