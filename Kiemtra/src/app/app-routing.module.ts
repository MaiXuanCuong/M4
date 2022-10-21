import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
    { path: '',component: IndexComponent},
    { path: 'add',component: AddComponent},
    { path: 'edit/:id',component: EditComponent},
    { path: 'show/:id',component: ShowComponent},
    { path: 'delete/:id',component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
