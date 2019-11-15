import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  showPassword = 'password';
  private passwordEmpty: boolean;
  private emailEmpty: boolean;
  private invalidLogin = false;

  constructor(private  service: AppService, private router: Router, private authService:
    // tslint:disable-next-line:align
    AuthenticationService) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    if (this.password == null) {
      this.passwordEmpty = true;
    }
    if (this.email == null) {
      this.emailEmpty = true;
    }
    this.authService.authenticate(this.email, this.password).subscribe(
      (data) => {
        this.service.isLoggedIn(true);
        this.router.navigate(['home']);
      }, error => {
        this.invalidLogin = true;
        this.email = undefined;
        this.password = undefined;
      });
  }

  showPass() {

    if (this.showPassword === 'password') {
      this.showPassword = 'text';
    } else {
      this.showPassword = 'password';
    }
  }
}
