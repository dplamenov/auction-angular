import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notification: string
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
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
    this.route.queryParams.subscribe(params => {
      this.notification = params.notificaton;

      setTimeout(() => {
        this.notification = null;
        this.router.navigate(['']).then();
      }, 3000);
    });
  }
}
