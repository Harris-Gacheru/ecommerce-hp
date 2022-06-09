import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './home/pages/cart/cart.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { LandingComponent } from './home/pages/landing/landing.component';
import { LoginComponent } from './home/pages/login/login.component';
import { RegisterComponent } from './home/pages/register/register.component';
import { ShopComponent } from './home/pages/shop/shop.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
