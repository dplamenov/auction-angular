import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userEmail = '';

  constructor(private userService: UserService, private router: Router) {
  }

  get isLoggedIn() {
    return this.userService.isLogged;
  }

  get email(){
    return this.userService.user.email;
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']).then();
    });
  }

  ngOnInit(): void {
    this.userService.authCompleted$.subscribe(user => {
      this.userEmail = user.email;
    });
  }
}
