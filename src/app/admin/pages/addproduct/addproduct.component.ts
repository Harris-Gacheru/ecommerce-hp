import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProductForm = this.fb.group({
    productname: ['', Validators.required],
    category: ['', Validators.required],
    price: [ , Validators.required],
    quantity: [ , Validators.required],
    description: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.addProductForm)
  }
}
