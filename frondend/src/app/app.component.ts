import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.userService.user);
    console.log(this.userService.isLogged);
    this.isLoggedIn = this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout().subscribe(_ => {
      this.router.navigate(['']).then();
    });
  }
}
