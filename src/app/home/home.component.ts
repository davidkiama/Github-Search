import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../user-service/user.service';

import { User } from '../user-class/user';

import { UserRequestService } from '../user-http/user-request.service';

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
    userService: UserService,
    private http: HttpClient,
    private userRequestService: UserRequestService
  ) {
    this.users = userService.getUsers();
  }

  ngOnInit() {}

  url: string = environment.userUrl;
  username: string = '';

  searchUser() {
    this.userRequestService.userRequest(this.url, this.username);
    this.user = this.userRequestService.user;
  }
}
