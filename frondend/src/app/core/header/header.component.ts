import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('notification') notification;
  @Output('logout') logoutEvent = new EventEmitter();


  get isLoggedIn() {
    return this.userService.isLogged;
  }

  get email(){
    return this.userService.user.email;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logoutHandler(){
    this.logoutEvent.emit({logout: true});
  }

  changeThemeHandler(data){
    console.log(data);
  }
}
