import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ProductAddComponent } from './admin-product/product-add/product-add.component';
import { ProductListComponent } from './admin-product/product-list/product-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryListComponent,
    AdminProductComponent,
    ProductAddComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialSharedModule
  ]
})
export class AdminModule { }
