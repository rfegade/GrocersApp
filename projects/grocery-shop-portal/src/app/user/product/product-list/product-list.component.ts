import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList :any;
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProductByCategory('Dairy').subscribe((result) => {
      this.productList = result.data;
    });

  }

}