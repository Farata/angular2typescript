import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product.detail.component";

const routes: Routes = [
  {path: '',        component: HomeComponent},
  {path: 'products', component: ProductDetailComponent}
];

export const routing = RouterModule.forRoot(routes);
