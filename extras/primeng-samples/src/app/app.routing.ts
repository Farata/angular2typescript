import { Routes, RouterModule } from '@angular/router';

import {MycalendarComponent} from "./mycalendar/mycalendar.component";
import {HomeComponent} from "./home/home.component";
import {CarouselComponent} from "./carousel/carousel.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'/home'},
  {path: 'home',        component: HomeComponent},
  {path: 'calendar', component: MycalendarComponent},
  {path: 'carousel', component: CarouselComponent}
];

export const routing = RouterModule.forRoot(routes);
