import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { CustomCommonModule } from './common/common.module';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { CustomInterceptorService} from './common/custom-intercepto/custom-intercepto.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    RouterModule.forRoot([]),
    CustomCommonModule,
    UserModule,
    AdminModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: CustomInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
