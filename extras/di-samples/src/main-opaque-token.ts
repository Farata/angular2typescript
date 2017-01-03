import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/opaque_token/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
