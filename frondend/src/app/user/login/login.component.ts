import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const email = this.email.value;
    const password = this.password.value;

    this.userService.login(email, password).subscribe(user => {
      if (!user) {
        return;
      }
      const {authToken} = user;
      sessionStorage.setItem('authToken', authToken);
      this.router.navigate(['']).then();
    });
  }

}
