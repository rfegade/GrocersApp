import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../common/guard/auth.guard';
import { UserGuard } from './guard/user.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';

const routes: Routes = [
  {path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard, UserGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, UserGuard]},
  {path: 'updateProfile', component: ProfileEditComponent, canActivate: [AuthGuard, UserGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
