import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add.component';
import { DeleteComponent } from './components/delete.component';
import { EditComponent } from './components/edit.component';
import { ListComponent } from './components/list.component';
import { ShowComponent } from './components/show.component';

const routes: Routes = [
{path: '', component:ListComponent},
{path: 'add', component:AddComponent},
{path: 'edit/:id', component:EditComponent},
{path: 'delete/:id', component:DeleteComponent},
{path: ':id',component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
