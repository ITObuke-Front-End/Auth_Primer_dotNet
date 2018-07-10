import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  login(username, password) {
    this.userService.login(username, password).subscribe(user => this.user = user);
  }

  logout() {
    this.userService.logout();
    this.user = this.userService.user;
  }

  

}
