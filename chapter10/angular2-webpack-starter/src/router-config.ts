import { RouterConfig } from '@angular/router';

import {Home} from './app/home/home';
import {About} from './app/about/about';

export const ROUTER_CONFIG: RouterConfig = [
    { path: '',        component: Home },
    { path: 'about', component: About }
];