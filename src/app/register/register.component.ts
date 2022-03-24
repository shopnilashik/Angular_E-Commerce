import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userData: UserDataService) {}

  ngOnInit(): void {}

  alart: boolean = false;

  addUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  addUserData() {
    this.userData.saveUserData(this.addUser.value).subscribe((result) => {
      // console.log(result);
      this.addUser.reset();
      this.alart = true;
    });
  }

  get nameField() {
    return this.addUser.get('name');
  }
  get emailField() {
    return this.addUser.get('email');
  }
  get passwordField() {
    return this.addUser.get('password');
  }
  closeAlart() {
     this.alart = false;
   }
}

