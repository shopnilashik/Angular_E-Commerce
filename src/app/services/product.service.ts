import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchCategories() {
    return this.http.get(
      'http://localhost/sct/api/products/read_categories.php'
    );
  }

  // Create Product
  saveProductData(data: any) {
    console.log(data);
    return this.http.post('http://localhost/sct/api/products/create.php', data);
  }
}
