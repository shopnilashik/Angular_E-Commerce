import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component'; 
import { AddProductComponent } from './add-product/add-product.component';



const routes: Routes = [
  {
    component: AdminhomeComponent,
    path: '',
  },
  {
    component: AddProductComponent,
    path: 'addproduct',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
