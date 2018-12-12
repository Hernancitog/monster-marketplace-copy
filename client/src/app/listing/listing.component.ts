import { Component, OnInit } from '@angular/core';
import {listing} from "../listing";
import {ListingService} from '../listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  currentListings: listing[];

  getListings(): void {
    this.listingService.getListings()
      .subscribe(listings => this.currentListings = listings);
  }

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.getListings();
  }

  name:string = '';
  onNameKeyUp(event: any){
    this.name = event.target.value;
  }
  getProduct(){
    console.log(this.name);
    // this.httpClient.get('localhost:8080/product-api')
    //   .subscribe(
    //     (data) =>
    //   )
  }

}
