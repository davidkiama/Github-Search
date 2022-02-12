import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
// import { resolve } from 'dns';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '');
  }

  userRequest() {
    interface ApiResponse {
      avatar_url: string;
      login: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.userUrl)
        .toPromise()
        .then(
          (response: any) => {
            this.user.avatar_url = response.avatar_url;
            this.user.login = response.login;

            resolve('');
          },
          (err) => {
            this.user.avatar_url = '';
            this.user.login = 'Error Username';

            reject(err);
          }
        );
    });

    return promise;
  }
}
