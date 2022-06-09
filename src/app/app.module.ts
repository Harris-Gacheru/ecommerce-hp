import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './home/pages/landing/landing.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';
import { HairproductsComponent } from './home/components/hairproducts/hairproducts.component';
import { BestsellersComponent } from './home/components/bestsellers/bestsellers.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { LoginComponent } from './home/pages/login/login.component';
import { RegisterComponent } from './home/pages/register/register.component';
import { CartcanvasComponent } from './home/components/cartcanvas/cartcanvas.component';
import { CartComponent } from './home/pages/cart/cart.component';
import { ShopComponent } from './home/pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    CarouselComponent,
    HairproductsComponent,
    BestsellersComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CartcanvasComponent,
    CartComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
