import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AppService} from '../app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  showPassword = 'password';
  private invalidLogin = false;
  private registerForm: FormGroup;
  submitted = false;

  constructor(private  service: AppService, private router: Router, private authService:
    // tslint:disable-next-line:align
    AuthenticationService ,  private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit()  {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
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
