import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.email]);
  password = new FormControl('', [Validators.minLength(8)]);
  repeatPassword = new FormControl('', []);

  showServerErrorMessage = false;
  errorMessage: unknown = '';

  constructor(private userService: UserService, private router: Router, private title: Title) {
    title.setTitle('Register');
  }

  ngOnInit(): void {
  }

  register(): void {
    const email = this.email.value;
    const password = this.password.value;
    const repeatPassword = this.repeatPassword.value;

    if (password !== repeatPassword) {
      this.errorMessage = 'password should match';
      return;
    }

    this.userService.register(email, password).subscribe(user => {
      this.router.navigate(['/user/login']).then();
    }, (err) => {
      this.showServerErrorMessage = true;
      this.errorMessage = Object.values(err.error)[0][0];

      setTimeout(() => {
        this.showServerErrorMessage = false;
      }, 3000);
    });
  }
}
