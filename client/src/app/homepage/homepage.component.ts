import { Component, OnInit } from '@angular/core';
import { Product} from "../Product";
import { ProductService} from "../product.service";
import { Category} from "../Category";
import { CategoryService} from "../category.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  currentProducts: Product[];
  categories: Category[];

  selected(id: number): void{
    if(id == 0){
      this.getProducts();
      return;
    }
    this.getProductsByCategory(id);
    return;
  }

  getProductsByCategory(id: number): void {
    this.productService.getProductsByCategory(id)
      .subscribe(products => this.currentProducts = products);
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(listings => this.currentProducts = listings);
  }

  getCategories(): void{
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  constructor(private productService: ProductService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

}
