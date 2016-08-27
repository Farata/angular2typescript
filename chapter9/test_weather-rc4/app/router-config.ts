import { RouterConfig } from '@angular/router';

import { HomeComponent } from './components/home';
import { WeatherComponent } from './components/weather';

export const ROUTER_CONFIG: RouterConfig = [
  { path: '',        component: HomeComponent },
  { path: 'weather', component: WeatherComponent }
];
