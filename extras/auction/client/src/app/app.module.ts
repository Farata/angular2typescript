import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ONLINE_AUCTION_SERVICES} from "./shared/services";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductDetailComponent,
    HomeComponent,
    CarouselComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',                    component: HomeComponent},
      {path: 'products/:productId', component: ProductDetailComponent}
    ]),
    HttpModule
  ],
  providers: [    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ...ONLINE_AUCTION_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
