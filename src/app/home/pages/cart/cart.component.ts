import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cartproduct } from 'src/app/interfaces/cartproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Cartproduct[] = []
  isLoading: boolean = false

  constructor(private cartService: CartService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.products = this.cartService.getproducts()
    console.log(this.products)
  }

  onChange(value: string){
    let val = parseInt(value)
    this.isLoading = true

    setTimeout(() => {
      this.isLoading = false
    }, 500);
    
    console.log(val)
  }
}
