import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';









@NgModule({
  declarations: [AdminhomeComponent, AddProductComponent, EditUserComponent, ],
  imports: [CommonModule, AdminRoutingModule, FormsModule]
  
})
export class AdminModule {}
