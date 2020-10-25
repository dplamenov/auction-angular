import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');
  repeatPassword = new FormControl('');

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void{
    const email = this.email.value;
    const password = this.password.value;
    const repeatPassword = this.repeatPassword.value;

    this.userService.register(email, password).subscribe(user => {
      console.log(user);
      this.router.navigate(['']).then();
    });
  }
}
