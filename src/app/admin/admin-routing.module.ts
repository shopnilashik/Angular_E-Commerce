import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component'; 
import { AddProductComponent } from './add-product/add-product.component';
import {EditUserComponent} from './edit-user/edit-user.component';
 


const routes: Routes = [
  {
    component: AdminhomeComponent,
    path: '',
  },
  {
    component: AddProductComponent,
    path: 'addproduct',
  },
  {
    component: EditUserComponent,
    path: 'updateuser',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
