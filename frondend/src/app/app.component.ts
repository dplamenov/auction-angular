import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }

  get isLoggedIn() {
    return this.userService.isLogged;
  }

  logout() {
    this.userService.logout().subscribe();
  }

  ngOnInit(): void {
  }
}
