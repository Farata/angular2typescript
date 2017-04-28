import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../home.component";
import {ProductDetailComponent} from "./product-child.component";
import {ProductDescriptionComponent} from "./product-description.component";
import {SellerInfoComponent} from "./seller.component";

export const routes: Routes = [
  {path: '',            component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent,
    children: [
      {path: '',           component: ProductDescriptionComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ]}
];

export const routing = RouterModule.forRoot(routes);
