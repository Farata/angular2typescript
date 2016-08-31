import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './app/home';
import { About } from './app/about';

export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'about', component: About }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
