import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = []


  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getproducts()
  }

  redirect(id: string){
    this.router.navigate([`/product/${id}`])
  }
}
