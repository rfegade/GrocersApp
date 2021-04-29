import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common/guard/auth.guard';
import { UserGuard } from '../guard/user.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: 'product', component: ProductListComponent, canActivate: [AuthGuard, UserGuard]},
  {path: 'product/:id', component: ProductDetailsComponent, canActivate: [AuthGuard, UserGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
