import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product.component";
import {LoginGuard} from "./login.guard";
import {UnsavedChangesGuard} from "./unsaved-changes.guard";
import {LoginComponent} from "./login.component";


const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'login',        component: LoginComponent},
    {path: 'product', component: ProductDetailComponent,
        canActivate:[LoginGuard], canDeactivate:[UnsavedChangesGuard]}
];

export const routing = RouterModule.forRoot(routes);
