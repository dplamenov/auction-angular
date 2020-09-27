import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frondend';

  isLoggedIn = false;

  constructor(private userService: UserService) {
    console.log('12344');
  }

  ngOnInit(): void{
    this.isLoggedIn = this.userService.isLogin();
  }

  logout(): void{
    this.userService.logout().then(_ => {
      this.isLoggedIn = false;
    });
  }
}
