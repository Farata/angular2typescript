import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProductDetailQueryParamComponent} from "./product-queryparam.component";

const routes: Routes = [
  {path: '',        component: HomeComponent},
  {path: 'products', component: ProductDetailQueryParamComponent}
];

export const routing = RouterModule.forRoot(routes);
