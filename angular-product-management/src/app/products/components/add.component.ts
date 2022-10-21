import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './../templates/add.component.html',
})
export class AddComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    private _Router: Router,
    private _ProductService:ProductsService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'name': new FormControl('',
      [Validators.required,
      ]),
      'price': new FormControl('',
      [
        Validators.required,
      ])
    })
  }
  handleSubmit(value:any):void {
    let data = value;
    let product : Products = {
      name:data.name,
      price:data.price
    }
    this._ProductService.store(product).subscribe(()=>{
      this._Router.navigate(['']);
      alert('Thêm Sản Phẩm "'+data.name+'" Thành Công')
    })
  }
}
