import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './components/show.component';
import { ListComponent } from './components/list.component';
import { EditComponent } from './components/edit.component';
import { DeleteComponent } from './components/delete.component';
import { AddComponent } from './components/add.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    AddComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
