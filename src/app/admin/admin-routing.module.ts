import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product', component: ProductComponent, children: [
    {path: ':id', component: EditComponent}
  ]},
  {path: 'orders', component: OrdersComponent, children: [
    {path: ':id', component: OrderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
