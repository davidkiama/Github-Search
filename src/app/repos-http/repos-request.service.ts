import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo-class/repo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReposRequestService {
  repo: Repo;

  repos: [];

  constructor(private http: HttpClient) {
    this.repo = new Repo('', '');
  }

  repoRequest(url: string, username: string) {
    interface ApiResponse {}

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          url + username + '/repos' + '?' + environment.access_token
        )
        .toPromise()
        .then(
          (response: any) => {
            this.repos = response;

            resolve('');
          },
          (err) => {
            // this.repos= 'Error';

            reject(err);
          }
        );
    });

    return promise;
  }
}
