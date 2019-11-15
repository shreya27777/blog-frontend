import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name;
  password;
  email;

  private passwordEmpty: boolean;
  private usernameEmpty: boolean;
  private emailEmpty: boolean;
  // tslint:disable-next-line:ban-types
  private exists: Object = true;

  constructor(private  authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  Signupdata() {
    if (this.password == null) {
      this.passwordEmpty = true;
    }
    if (this.name == null) {
      this.usernameEmpty = true;
    }
    if (this.email == null) {
      this.emailEmpty = true;
    }
    this.authService.signUp({
      name: this.name,
      password: this.password,
      email: this.email
    }).subscribe(data => {
      this.exists = data;
      if (this.exists === true) {
        this.router.navigate(['/login']);
      }
    });
  }
}
