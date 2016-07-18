import { RouterConfig } from '@angular/router';

import {Home} from './app/home';
import {About} from './app/about';

export const ROUTER_CONFIG: RouterConfig = [
    { path: '',        component: Home },
    { path: 'about', component: About }
];