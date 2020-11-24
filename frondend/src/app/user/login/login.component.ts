import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.email]);
  password = new FormControl('', [Validators.minLength(8)]);

  errorMessage: unknown = '';
  showServerErrorMessage = false;

  constructor(private userService: UserService, private router: Router, private title: Title) {
    title.setTitle('Login');
  }

  ngOnInit(): void {
  }

  login(): void {
    const email = this.email.value;
    const password = this.password.value;

    this.userService.login(email, password).subscribe(_ => {
      this.router.navigate(['']).then();
    }, (err) => {
      this.showServerErrorMessage = true;
      this.errorMessage = Object.values(err.error)[0][0];

      setTimeout(() => {
        this.showServerErrorMessage = false;
      }, 3000);
    });
  }

}
