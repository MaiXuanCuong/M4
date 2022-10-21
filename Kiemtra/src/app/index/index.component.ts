import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Products} from '../model/products';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: any;  
  constructor(private product: ProductsService) {}
  ngOnInit(): void {
    this.product.getAll().subscribe(res => {
      this.products = res;
    });
  }

}