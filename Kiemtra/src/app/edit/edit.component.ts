import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Products } from '../model/products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any = 0;
  product !: Products;
  productForm!: FormGroup;
  constructor(private _Router: Router,
              private ActivatedRoute: ActivatedRoute,
              private _ProductService:ProductsService
    ) { }

    ngOnInit(): void {
      this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id');
        this.id = id;
        let staff = this._ProductService.find(id).subscribe(product => {
          this.productForm = new FormGroup({
            name: new FormControl(product.name),
            price: new FormControl(product.price),
            description: new FormControl(product.description),
           
          });
        });
      });
    }
    onSubmit() {
      let data = this.productForm.value;
      console.log(data);
      let product: Products = {
        name: data.name,
        price: data.price,
        description: data.description,
      }
      this._ProductService.update(this.id, product).subscribe(() => {
        alert('Cập nhật sản phẩm thành công');
        // this.staffForm.reset();
        this._Router.navigate(['']);
      },
        e => {
          console.log(e);
        })
    }

}