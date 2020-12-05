import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  get email(){
    const user = this.userService.user;
    return user ? user.email : '';
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
