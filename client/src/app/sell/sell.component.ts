import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import { Product } from "../Product";
import {Category} from "../Category";
import {Status} from "../Status";
import {Member} from "../Member";
import {ProductService } from "../product.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  newProduct = new Product(0,'', new Category(1,''), null, new Status(1,''), new Member(1,'','','','','','',''), null, 0, '11/15/2018', '', '');

  postListing(): void {
    console.log(this.newProduct);
    this.productService.addProduct(this.newProduct).subscribe();
  }

  constructor(private location: Location,
              private productService: ProductService) { }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }

}
