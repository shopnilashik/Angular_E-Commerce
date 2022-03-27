import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AdminhomeComponent],
  imports: [CommonModule, AdminRoutingModule,FormsModule],
})
export class AdminModule {}
