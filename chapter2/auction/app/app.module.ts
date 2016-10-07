import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import ProductItemComponent from "./components/product-item/product-item";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import {ProductService} from "./services/product-service";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ApplicationComponent,
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    ProductItemComponent,
                    SearchComponent,
                    StarsComponent],
    providers:    [ProductService],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
