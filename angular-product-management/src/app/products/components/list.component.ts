import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-list',
  templateUrl: './../templates/list.component.html',
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private _ProductService:ProductsService,
    // private _Router: Router
  ) { }

  ngOnInit(): void {
    this._ProductService.getAll().subscribe(res =>{
      this.products = res;
    })
  }
  deleteItem(id:any,name:any){
    if(confirm('Bạn Muốn Xóa "'+ name+'"')){
      this._ProductService.delete(id).subscribe(() => {
        this.ngOnInit();
        alert('Xóa "'+name+'" thành công');
      }, (e: any) => {
        console.log(e);
      })
    }
  }


}
