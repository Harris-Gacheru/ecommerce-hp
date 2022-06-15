import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-addtobag',
  templateUrl: './addtobag.component.html',
  styleUrls: ['./addtobag.component.css']
})
export class AddtobagComponent implements OnInit {
  @Input() product?: Product
  @Input() price?: number
  @Input() quantity?: number
 
  constructor() { }

  ngOnInit(): void {
  }

}
