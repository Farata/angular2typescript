import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { WeatherComponent } from './components/weather';

export const routes: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'weather', component: WeatherComponent }
];

export const routing = RouterModule.forRoot(routes);
