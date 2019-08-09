import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProduct;
  baseUrl = "https://world.openfoodfacts.org/api/v0/product/";

  constructor(private http:HttpClient) { }

  getProduct(productID) {
    let data;
    return this.http.get(this.baseUrl + productID);
  }
  getListProduct(){
    return this.listProduct;
  }
}
