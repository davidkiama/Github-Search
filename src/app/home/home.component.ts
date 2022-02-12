import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../user-service/user.service';

import { User } from '../user-class/user';

import { UserRequestService } from '../user-http/user-request.service';

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

  ngOnInit() {
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;
  }
}
