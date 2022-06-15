import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      name: 'Selsun Shampoo 120ml',
      category: 'shampoo',
      price: 1200,
      quantity: 30,
      description: 'Selsun Shampoo it a medicated shampoo used to treat dandruff and seborrhoeic dermatitis (a greasy, crusting, itching scalp caused by excess oil). It works against dandruff in two ways: By reducing greasiness of the scalp and. By slowing down growth of the layer of skin cells on the scalp that cause dandruff.',
      images: [
        'https://cdn01.pharmeasy.in/dam/products_otc/157655/selsun-shampoo-120ml-2-1654078296.jpg',
        'https://cdn01.pharmeasy.in/dam/products_otc/157655/selsun-shampoo-120ml-3-1654078771.jpg'
      ]
    },
    {
      id: '2',
      name: 'Sesa Shampoo 200 Ml',
      category: 'shampoo',
      price: 800,
      quantity: 5,
      description: 'Sesa is a certified 100% Ayurvedic shampoo infused with 17 medicinal herbs. Made using the wisdom of ancient Ayurveda, it is effective against multiple hair problems such as hair fall, dandruff, and scalp infections. Its Paraben-free formula cleanses scalp gently and makes your hair smooth and silky.',
      images: [
        'https://cdn01.pharmeasy.in/dam/products_otc/A51538/sesa-hair-shampoo-bottle-of-200-ml-2-1641788838.jpg'
      ]
    },
    {
      id: '3',
      name: 'Olaplex No. 5 Conditioner',
      category: 'Conditioner',
      price: 2000,
      quantity: 10,
      description: 'A highly-moisturizing, reparative conditioner that protects and repairs damaged hair, split ends, and frizz by re-linking broken bonds. Free from DEA , Aldehydes and Formaldehyde. Formulated for daily/ every wash use.',
      images: [
        'https://m.media-amazon.com/images/I/713hHlHMA+L._SX522_.jpg',
        'https://m.media-amazon.com/images/I/81gcSW6ySyL._SX522_.jpg',
        'https://m.media-amazon.com/images/I/81Z9Gk0eaDL._SX522_.jpg'
      ]
    },
    {
      id: '5',
      name: 'Dove Nutritive Solutions Conditioner',
      category: 'Conditioner',
      price: 1800,
      quantity: 5,
      description: 'Dove Intensive Repair conditioner is created with a blend of hair essentials, including Fibre Repair Actives, to instantly smooth and provide damage care. Dove Intensive Repair Conditioner with Fibre Repair Actives is specifically formulated for the treatment of heat and styling-damaged hair.',
      images: [
        'https://m.media-amazon.com/images/I/61XH8AvktsL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71UT-PV3avL._SX679_.jpg'
      ]
    }
  ]

  constructor() { }

  addproduct(product: Product){
    this.products.push(product)
  }

  // get all productss
  getproducts(){
    return this.products
  }

  // get single product
  getproduct(id: string){
    return this.products.find(product => product.id == id)
  }

  // update product
  updateproduct(id: string, newproductinfo: Product){
    const product = this.getproduct(id)

    if (product) {
      product.name = newproductinfo.name,
      product.category = newproductinfo.category,
      product.description = newproductinfo.description,
      product.price = newproductinfo.price,
      product.quantity = newproductinfo.quantity,
      product.images = newproductinfo.images
    }
  }

  // delete product
  deleteproduct(id: string){
    const index = this.products.findIndex(product => product.id == id)
    return this.products.splice(index, 1)
  }
}
