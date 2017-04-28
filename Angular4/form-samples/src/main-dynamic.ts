import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/dynamic-form-controls/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
