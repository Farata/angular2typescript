import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import ApplicationComponent from './components/application/application';
import CarouselComponent from './components/carousel/carousel';
import HomeComponent from './components/home/home';
import FooterComponent from './components/footer/footer';
import NavbarComponent from './components/navbar/navbar';
import ProductDetailComponent from './components/product-detail/product-detail';
import ProductItemComponent from './components/product-item/product-item';
import SearchComponent from './components/search/search';
import StarsComponent from './components/stars/stars';
import { ONLINE_AUCTION_SERVICES } from './services/services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',                    component: HomeComponent},
      {path: 'products/:productId', component: ProductDetailComponent}
    ])
  ],
  declarations: [
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProductDetailComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ...ONLINE_AUCTION_SERVICES
  ],
  bootstrap: [ ApplicationComponent ]
})
export class AppModule {}
