import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-show',
  templateUrl: './../templates/show.component.html',
})
export class ShowComponent implements OnInit {
  products!:Products;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductsService
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      const id = paramMap.get('id');
      this._ProductService.find(id).subscribe(products => {
        this.products = products;
      })
    })
  }
}
