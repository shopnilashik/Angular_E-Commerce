import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class UserDataService {
  url = 'http://localhost/sct/api/users/create.php';
  deleteURL = 'http://localhost/sct/api/users/delete.php';
  fetchUser = 'http://localhost/sct/api/users/read.php';
  a: any;
  b:any;
  deleteData: any;
  constructor(private http: HttpClient) {}
  // Create user
  saveUserData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }
  //Show Users
  fetchUsers() {
    return this.http.get(this.fetchUser);
  }
  deleteUser(id: any) {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { "id": id },
    };
   
    // this.b = id;
    // const obj:any = { id: this.b };
    // this.deleteData = JSON.parse(JSON.stringify(obj));
    // console.log(obj);
    return this.http.delete(
      'http://localhost/sct/api/users/delete.php',
      options
    );
  }
}

