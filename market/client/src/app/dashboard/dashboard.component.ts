import { Component, OnInit } from '@angular/core';
import { listing} from "../listing";
import {ListingService} from "../listing.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  listings: listing[] = [];

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.listingService.getListings()
      .subscribe(Items => this.listings = Items.slice(0, 3));
  }
}
