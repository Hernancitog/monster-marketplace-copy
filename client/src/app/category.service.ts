import { Injectable } from '@angular/core';
import { Category} from "./Category";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('https://monster-marketplace-copy.cfapps.io/product-api/categories')
  }

  constructor(private http: HttpClient) { }
}
