import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form){
    this.router.navigate(['/'], {queryParams: {notification: 'Your message has been sent.'}});
  }

}
