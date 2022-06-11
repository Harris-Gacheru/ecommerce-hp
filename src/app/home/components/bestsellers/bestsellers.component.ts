import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['/product/1'])
  }
}
