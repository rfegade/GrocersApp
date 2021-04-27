// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './common/guard/admin.guard';
import { UserGuard } from './common/guard/user.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AdminGuard] },
      { path: 'user', loadChildren: './user/user.module#UserModule', canLoad: [UserGuard] }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }