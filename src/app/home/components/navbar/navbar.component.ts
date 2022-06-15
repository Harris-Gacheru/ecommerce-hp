import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  productsNo!: number
  constructor(private cartService: CartService) { }

  ngDoCheck(): void {
    this.productsNo =  this.cartService.getproducts().length
  }

  ngOnInit(): void {
    this.productsNo = this.cartService.getproducts().length
  }

}
