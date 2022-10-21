import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Products } from '../model/products';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id: any = 0;
  product !: Products;
  constructor(
    private _ProductService: ProductsService,
    private ActivatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.find(id).subscribe((product) => {
        this.product = product;
        })  
      })
  }

}