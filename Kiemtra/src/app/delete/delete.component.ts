import { Component, OnInit } from '@angular/core';
import { Products } from '../model/products';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: any = 0;
  product !: Products;
  constructor(
    private _Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private _ProductService:ProductsService
  ) { }
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
     const id = paramMap.get('id');
     this.id = id;
     console.log(id);
     this._ProductService.find(id).subscribe((product) => {
       this.product = product;
       // console.log(staff.name);
       })
     })
 }
   delete(){
     this._ProductService.destroy(this.id).subscribe(() => {
       this._Router.navigate(['']);
       alert('Xóa sản phẩm thành công');
     }, (e: any) => {
       console.log(e);
     })
   }
}