import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userData: UserDataService) {}

  ngOnInit(): void { }
  

  addUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  addUserData() { 
    this.userData.saveUserData(this.addUser.value).subscribe((result) => {
       console.log("hello");
      this.addUser.reset();
      
    });
  };
}

