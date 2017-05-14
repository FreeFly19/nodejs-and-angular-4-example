import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Http} from "@angular/http";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user: User = new User();

  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route
      .params
      .subscribe(params => {
        this.http
          .get(`/api/users/${params.userId}`)
          .map(res => <User>res.json())
          .subscribe(user => this.user = user);
      });
  }
}
