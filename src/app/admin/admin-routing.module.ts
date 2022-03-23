import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component'; 
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {
    component: AdminhomeComponent,
    path: '',
  },
  {
    component: AddproductComponent,
    path: 'addproduct',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
