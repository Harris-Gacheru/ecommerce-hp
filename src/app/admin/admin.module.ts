import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderComponent } from './pages/order/order.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/product/edit/edit.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    AddproductComponent,
    OrdersComponent,
    OrderComponent,
    DashboardComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
