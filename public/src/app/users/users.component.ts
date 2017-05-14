import { Component } from '@angular/core';
import {User} from "./user";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[];

  constructor (private http: Http) {
    http
      .get('/api/users')
      .map(res => <User[]>res.json())
      .subscribe(users => {
        this.users = users;
      });
  }

}
