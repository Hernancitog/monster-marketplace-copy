import { Component, OnInit, Input} from '@angular/core';
import { Product} from "../Product";
import { ActivatedRoute} from "@angular/router";
import { Location} from "@angular/common";

import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private location: Location) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // retrieve the id from the url that called listing-detail
    this.productService.getProductById(id)
      .subscribe(item => {
          if(item == undefined){
            console.log('IM UNDEFINED');
          } else {
            this.product = item
          }
        }
      );
  }

  goBack(): void{
    this.location.back();
  }

}
