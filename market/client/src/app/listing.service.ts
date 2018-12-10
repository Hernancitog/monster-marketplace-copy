import { Injectable } from '@angular/core';
import {listing} from "./listing";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  getListings(): Observable<listing[]>{
    return this.http.get<listing[]>('http://localhost:8080/product-api/allListings')
  }

  addListing(item:listing): void {
    // return this.http.post(url, item);

  }

  getListing(id: number): Observable<listing>{
    console.log(`fetched listing id = ${id}`);
    // return of(Listings.find(listing => listing.id === id) );
    return this.http.get<listing>("http://localhost:8080/product-api/listing/" + id);
  }

  constructor(private http: HttpClient) { }
}
