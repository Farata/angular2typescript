import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/one-way/app.module';

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
