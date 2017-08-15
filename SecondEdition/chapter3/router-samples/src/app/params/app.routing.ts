import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product.detail.component";

export const routes: Routes = [
  {path: '',            component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

export const routing = RouterModule.forRoot(routes);
