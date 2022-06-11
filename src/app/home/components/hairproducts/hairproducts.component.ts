import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hairproducts',
  templateUrl: './hairproducts.component.html',
  styleUrls: ['./hairproducts.component.css']
})
export class HairproductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['/shop'])
  }
}
