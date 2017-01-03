import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "../home.component";
import {ProductDetailComponent} from "../product.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
// import {LuxuryModule} from "./luxury.module"; // for eager loading

@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot([
      {path: '',        component: HomeComponent},
      {path: 'product', component: ProductDetailComponent},
//      {path: 'luxury', loadChildren: () => LuxuryModule},  // for eager loading

      {path: 'luxury', loadChildren: './luxury.module#LuxuryModule' } // for lazy loading
    ])
  ],
  declarations: [ AppComponent, HomeComponent, ProductDetailComponent],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
