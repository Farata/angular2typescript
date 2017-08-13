import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProductDetailParamComponent} from "./product-param.component";

export const routes: Routes = [
  {path: '',            component: HomeComponent},
  {path: 'product/:id', component: ProductDetailParamComponent}
];

export const routing = RouterModule.forRoot(routes);
