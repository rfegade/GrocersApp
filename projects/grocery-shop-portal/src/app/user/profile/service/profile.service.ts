import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../material-shared/AppConfig';
import { IAppConfig } from '../../../material-shared/IAppConfig';
import { IResponse } from '../../../common/service/IResponse';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getProfile() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/user');
  }

  updateProfile(userInfo: any) {
    return this.http.put<IResponse>(this.appConfig.apiEndPoint + '/user', userInfo);
  }
}