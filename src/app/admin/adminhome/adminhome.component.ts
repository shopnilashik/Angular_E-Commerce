import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  addProductForm:boolean = false;
  users: any;
  constructor(private userData: UserDataService) { 
    this.userData.fetchUsers().subscribe((data) => { 
      this.users = data;

    })
  }

  ngOnInit(): void {
  }

  // Add Product toggle 
  addProductFormToogle() { 
    this.addProductForm = !this.addProductForm;
  }

}
