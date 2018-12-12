import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import {ProductService} from "../product.service";
import { Location} from "@angular/common";


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  currentProducts: Product[];

  getProductsByMember(): void {
    this.productService.getProductsByMember(1)
      .subscribe(products => this.currentProducts = products);
  }

  constructor(private productService: ProductService,
              private location: Location) { }

  ngOnInit() {
    this.getProductsByMember();
  }

  goBack(): void{
    this.location.back();
  }

}
