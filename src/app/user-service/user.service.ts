import { Injectable } from '@angular/core';

import { Users } from '../userLists';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    return Users;
  }

  constructor() {}
}
