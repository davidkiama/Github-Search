import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';

import { UserRequestService } from '../user-http/user-request.service';
import { ReposRequestService } from '../repos-http/repos-request.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[];
  user: User;

  constructor(
    private userRequestService: UserRequestService,
    private repoRequestService: ReposRequestService
  ) {
    // this.users = userService.getUsers();
  }

  ngOnInit() {}

  url: string = environment.userUrl;
  username: string = '';
  repos: [];

  searchUser() {
    this.userRequestService.userRequest(this.url, this.username);
    this.user = this.userRequestService.user;

    if (this.user.avatar_url) {
      this.getRepos();
    }
  }

  getRepos() {
    this.repoRequestService.repoRequest(this.url, this.username);
    this.repos = this.repoRequestService.repos;

    console.log(this.repos);
  }
}
