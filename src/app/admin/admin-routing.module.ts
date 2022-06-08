import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'add-product', component: AddproductComponent},
  {path: 'product/:id', component: ProductComponent, children: [
    {path: 'edit', component: EditComponent}
  ]},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
