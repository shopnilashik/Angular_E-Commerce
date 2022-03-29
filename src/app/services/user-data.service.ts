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
  b: any;
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
      body: { id: id },
    };

    return this.http.delete(
      'http://localhost/sct/api/users/delete.php',
      options
    );
  }
  getCurrentUser(id: any) {
  
    return this.http.get(
      'http://localhost/sct/api/users/read_single.php?id='+id,
       
    );
  }
  updateUser(id: any, data: any) { 
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: { id:id, name: data.name, email: data.email, password: data.password },
      };
    console.log(data);
    console.log("options",options);
    return this.http.put(
      'http://localhost/sct/api/users/update.php', data
    );
  };
}

