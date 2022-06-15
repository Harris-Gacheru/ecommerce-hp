import { Component, OnInit } from '@angular/core';
import { Cartproduct } from 'src/app/interfaces/cartproduct';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartcanvas',
  templateUrl: './cartcanvas.component.html',
  styleUrls: ['./cartcanvas.component.css']
})
export class CartcanvasComponent implements OnInit {
  products: Cartproduct[] = [ ]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getproducts()
  }

  remove(id: string){
    this.cartService.removefromcart(id)  
  }

}
