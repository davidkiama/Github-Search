import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user-class/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '');
  }

  userRequest(url: string, username: string) {
    interface ApiResponse {
      avatar_url: string;
      login: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(url + username + '?' + environment.access_token)
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
