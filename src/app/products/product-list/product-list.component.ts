import { Component, OnInit } from '@angular/core';
import { Product } from "./../product.interface";
import { ProductService } from "./../product.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = 'Products';
  //products: Product[];
  products$: Observable<Product[]>;
  selectedProduct: Product;

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  
  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
  }

  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {
 
  }

  ngOnInit(): void {
    this.products$ = this.productService.products$;

    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     results => this.products = results
    //   )
  }

}
