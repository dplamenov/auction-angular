import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notification: string;
  setTimeoutId: number;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']).then();
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.notification = params.notification;
      this.setTimeoutId = setTimeout(() => {
        this.notification = null;
        this.router.navigateByUrl(this.router.url.split('?')[0], {queryParams: []}).then();
      }, 3000);
    });
  }
}
