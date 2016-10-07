import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home";
import {ProductDetailComponent} from "./product";

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductDetailComponent}
];

export const routing = RouterModule.forRoot(routes);