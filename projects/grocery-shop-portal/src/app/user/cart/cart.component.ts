// import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { CartService } from './service/cart.service';
// import { MatTable } from '@angular/material/table';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

//   @ViewChild('cartTable') cartTable!: MatTable<any>;
//   userCart = [] as any;
//   displayedColumns: string[] = ['imageUrl', 'productName', 'quantity', 'price', 'actions'];
//   constructor(private cartService: CartService) { }

//   ngOnInit() {
//     this.cartService.getUserCart()
//       .subscribe(result => {
//         this.userCart = result.data;
//         // result.data.forEach((product: any) => {
//         //   product.UserCart.quantity = product.quantity;
//         //   this.userCart.push(product.UserCart);
//         // });
//         this.cartTable.dataSource = this.userCart;
//         this.cartTable.renderRows();
//       });
//   }

// }

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from './service/cart.service';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('cartTable') cartTable!: MatTable<any>;
  @Input() product :any;
  userCart: any[] = [];
  displayedColumns: string[] = ['imageUrl', 'productName', 'quantity', 'price', 'total', 'actions'];
  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.cartService.getUserCart()
      .subscribe(result => {
        //this.userCart = result.data;
        result.data.forEach((product: any) => {
          product.userCart[0].quantity = product.quantity;
          this.userCart.push(product.userCart[0]);
        });
        this.cartTable.dataSource = this.userCart;
        this.cartTable.renderRows();
      });
  }

  checkOut() {
    alert('Items has been shipped!');
    this.userCart = [];
    this.router.navigate(['/user/product']);

  }
}