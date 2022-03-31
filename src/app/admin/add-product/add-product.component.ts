import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  categorylist: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchCategories().subscribe((data: any) => {
      this.categorylist = data;
      console.log(this.categorylist);
    });
  }
  //  Add users
  addProduct = new FormGroup({
    ProductName: new FormControl('', [Validators.required]),
    ProductDetails: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    categoriy_id: new FormControl('', [Validators.required]),
    ProductPrice: new FormControl('', [Validators.required]),
  });

  addProductData() {
    console.log(this.addProduct);
    this.productService
      .saveProductData(this.addProduct.value)
      .subscribe((result) => {
        console.log(result);
      });
  }
  imgshow() {
    console.log();
   };
}
