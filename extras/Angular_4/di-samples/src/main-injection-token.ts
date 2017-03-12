import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/injection-token/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
