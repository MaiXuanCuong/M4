import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

const routes: Routes = [
  // {
  //   path: 'product/list',
  //   component: ProductListComponent
  // }, {
  //   path: 'product/create',
  //   component: ProductCreateComponent
  // }
  {
  path: 'products',
    loadChildren: () => import('./products/products.module').then(module => module.ProductsModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
