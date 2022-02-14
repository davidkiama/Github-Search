import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';

import { UserRequestService } from '../user-http/user-request.service';
import { ReposRequestService } from '../repos-http/repos-request.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  users: User[];
  user: User;

  url: string = environment.userUrl;
  username: string = '';
  repos: Repo[];

  constructor(
    private userRequestService: UserRequestService,
    private repoRequestService: ReposRequestService
  ) {}

  ngOnInit() {}

  name: string = '';
  searchUser() {
    this.userRequestService.userRequest(this.url, this.username);
    this.user = this.userRequestService.user;

    //the repos request took loonger to respond hence the timeout

    this.repoRequestService.repoRequest(this.url, this.username);
    setTimeout(() => {
      this.repos = this.repoRequestService.repos;

      console.log(this.repos);
    }, 2000);
  }
}
