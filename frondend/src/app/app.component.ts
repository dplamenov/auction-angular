import {Component, HostListener, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  notification: string;
  setTimeoutId: number;
  isBackToTopActive: boolean;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  @HostListener('window:scroll') onScroll(): void {
    this.isBackToTopActive = window.pageYOffset > 20;
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
        this.router.navigate([], {relativeTo: this.route, queryParams: {notification: null}, queryParamsHandling: 'merge'});
      }, 3000);
    });
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

}
