import { Component, OnInit, Input } from '@angular/core';
import { listing} from "../listing";
import { ActivatedRoute} from "@angular/router";
import { Location} from "@angular/common";

import {ListingService} from "../listing.service";

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {

  @Input()listing: listing;


  constructor(private route: ActivatedRoute,
              private listingService: ListingService,
              private location: Location){ }

  ngOnInit() {
    this.getListing();
  }

  getListing(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // retrieve the id from the url that called listing-detail
    this.listingService.getListing(id)
      .subscribe(item => {
        if(item == undefined){
          console.log('IM UNDEFINED');
        } else {
          this.listing = item
        }

      }
  );
  }

  goBack(): void{
    this.location.back();
}

}
