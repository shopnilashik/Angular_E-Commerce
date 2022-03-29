import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  alart: boolean = false;
  constructor(
    private userData: UserDataService,
    private router: ActivatedRoute
  ) { }
  

  updateUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  name: any; 
  
  ngOnInit(): void {
    this.userData
      .getCurrentUser(this.router.snapshot.params['id'])
      .subscribe((result:any) => {
      // this.name=result.name;
        
        this.updateUser = new FormGroup({
          id: new FormControl(result.id),
          name: new FormControl(result.name),
          email: new FormControl(result.email),
          password: new FormControl(result.password),
        });
      });
  }
  
  updateUserData() {
    this.userData.updateUser(this.router.snapshot.params['id'], this.updateUser.value).subscribe((result:any) => {
     console.log(result);
   });
  }
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
