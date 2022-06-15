import { Injectable } from '@angular/core';
import { Cartproduct } from '../interfaces/cartproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  products: Cartproduct[] = [
    {
      id: '2',
      name: 'Sesa Shampoo 200 Ml',
      category: 'shampoo',
      price: 800,
      quantity: 5,
      selectedQuantity: 1,
      description: 'Sesa is a certified 100% Ayurvedic shampoo infused with 17 medicinal herbs. Made using the wisdom of ancient Ayurveda, it is effective against multiple hair problems such as hair fall, dandruff, and scalp infections. Its Paraben-free formula cleanses scalp gently and makes your hair smooth and silky.',
      image: 'https://cdn01.pharmeasy.in/dam/products_otc/A51538/sesa-hair-shampoo-bottle-of-200-ml-2-1641788838.jpg'
    }
  ]
  
  constructor() { }

  addtocart(product: Cartproduct){
    this.products.push(product)
  }

  getproducts(){
    return this.products
  }

  removefromcart(id: string){
    const index = this.products.findIndex(product => product.id == id)
    console.log(this.products, index)
    return this.products.splice(index, 1)
  }

  updateproduct(id: string, price: number, quantity: number){
    const product = this.products.find(product => product.id == id)
    product!.price = price
    product!.quantity = quantity
  }
}
