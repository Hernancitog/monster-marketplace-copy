import { Injectable } from '@angular/core';
import { Product } from "./Product";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('https://market.cfapps.io/product-api/');
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>('https://market.cfapps.io/product-api/product/' + id);

  }

  getProductsByMember(id: number): Observable<Product[]>{
    return this.http.get<Product[]>('https://market.cfapps.io/product-api/product/seller/' + id);

  }

  addProduct(item: Product):Observable<Object>{
    return this.http.post('https://market.cfapps.io/product-api/product',item);
  }

  getProductsByCategory(id: number): Observable<Product[]>{
    return this.http.get<Product[]>('https://market.cfapps.io/product-api/product/category/' + id);
}

  constructor(private http: HttpClient) { }
}
