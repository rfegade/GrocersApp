import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '../../../material-shared/AppConfig';
import { IAppConfig } from '../../../material-shared/IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getProfile() {
    return this.http.get(this.appConfig.apiEndPoint + '/user');
  }
}
