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
    this.repo = new Repo('', '', new Date());
  }

  repoRequest(url: string, username: string) {
    interface ApiResponse {
      name: string;
      repo_url: string;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          url + username + '/repos' + '?' + environment.access_token
        )
        .toPromise()
        .then(
          (response: any) => {
            this.repos = response;

            this.repos.forEach((element: Repo) => {
              this.repo.name = element.name;
              this.repo.html_url = element.html_url;
              this.repo.created_at = new Date(element.created_at);
            });

            resolve('');
          },
          (err) => {
            this.repos = [];

            reject(err);
          }
        );
    });

    return promise;
  }
}
