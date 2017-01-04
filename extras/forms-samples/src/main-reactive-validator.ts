import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/reactive-validator/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
