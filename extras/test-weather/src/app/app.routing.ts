import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home';
import { WeatherComponent } from '../weather/weather';

export const routes: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'weather', component: WeatherComponent }
];

export const routing = RouterModule.forRoot(routes);
