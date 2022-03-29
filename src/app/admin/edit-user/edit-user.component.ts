import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  alart: boolean = false;
  constructor(private userData: UserDataService) {}

  ngOnInit(): void {}

  updateUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  updateUserData() {}
  get nameField() {
    return this.updateUser.get('name');
  }
  get emailField() {
    return this.updateUser.get('email');
  }
  get passwordField() {
    return this.updateUser.get('password');
  }
  closeAlart() {
    this.alart = false;
  }
}
