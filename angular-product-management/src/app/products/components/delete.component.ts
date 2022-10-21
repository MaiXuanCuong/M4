import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete',
  templateUrl: './../templates/delete.component.html',
})
export class DeleteComponent implements OnInit {
  id:any = 0;
  product!: Products;
  constructor(
    private _Router:Router,
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductsService
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap : ParamMap)=>{
      const id =  paramMap.get('id');
      this.id = id;
      console.log(id);
      this._ProductService.find(id).subscribe((product)=>{
        this.product = product;
      })
      
    })
  }
  delete(){
    this._ProductService.delete(this.id).subscribe(()=>{
      this._Router.navigate(['']);
    },(e: any)=>{
      console.log(e);
      
    })
    
  }


}
