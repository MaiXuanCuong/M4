import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-edit',
  templateUrl: './../templates/edit.component.html',
})
export class EditComponent implements OnInit {
  id:any = 0;
  product!:Products;
  productForm!:FormGroup;
  constructor(
    private _Router: Router,
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductsService,
    ) { }
    
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const id = paramMap.get('id');
      this.id = id;
      let staff = this._ProductService.find(id).subscribe(product=>{
        this.productForm = new FormGroup({
          name: new FormControl(product.name,),
          price:new FormControl(product.price,),
        })
      })
    })
  }
  onSubmit(){
    let data = this.productForm.value;
    let product: Products = {
      name : data.name,
      price : data.price,
    }
    this._ProductService.update(this.id,product).subscribe(()=>{
      alert('Cập nhật sản phẩm thành công');
      this._Router.navigate([''])
    }, err => {
      console.log(err);
    })
  }
}
