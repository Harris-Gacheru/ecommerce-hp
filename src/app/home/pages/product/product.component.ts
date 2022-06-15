import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cartproduct } from 'src/app/interfaces/cartproduct';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product?: Product
  id: string = ''
  price!: number
  qty: number = 1
  selectedImage: string = ''
  alert: boolean = false

  constructor(private productService: ProductsService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.product = this.productService.getproduct(this.id)
      this.selectedImage = this.product!.images[0]
      this.price = this.product!.price
    })
  }

  onChange(value: string){
    this.qty = parseInt(value)
    this.price = this.product!.price * this.qty
    if (this.qty <= 0 || this.qty > this.product!.quantity) {
      this.alert = true
      this.price = this.product!.price
    }
    setTimeout(() => {
      this.alert = false
    }, 2200);
  }

  getImageUrl(url: string, e: any){
    this.selectedImage = url

    let elem = document.querySelector('.active')
    if (elem) {
      elem.classList.remove('active')
    }
    e.classList.add('active')
  }

  addToCart(id: string, name: string, category: string, price: number, quantity: number, selectedQuantity: number,description: string, image: string){
    let product = {id, name, category, price, quantity, selectedQuantity, description, image}

    this.cartService.addtocart(product)
  }
}
