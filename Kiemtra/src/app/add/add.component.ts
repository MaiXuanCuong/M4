import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {Products} from '../model/products';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private _ProductService:ProductsService,
              private _Router:Router

  ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name': new FormControl(''),
      'price': new FormControl(''),
      'description': new FormControl(''),
    })
  }
  onSubmit() {
    let data = this.productForm.value;
    // console.log(data.name);
    let product: Products = {
      name: data.name,
      price: data.price,
      description: data.description,
    }
    this._ProductService.store(product).subscribe(() => {
      alert('Thêm sản phẩm thành công');
      // this.staffForm.reset();
      this._Router.navigate(['']);
    },
      e => {
        console.log(e);
      })
  }
}