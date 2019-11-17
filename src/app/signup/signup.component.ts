
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name;
  password;
  email;
  mobile;
  bio;
  // tslint:disable-next-line:ban-types
  private exists: Object = true;
  private registerForm: FormGroup;
  submitted = false;

  constructor(private  authService: AuthenticationService, private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.signUp({
      name: this.name,
      password: this.password,
      email: this.email,
      mobile: this.mobile,
      bio: this.bio
    }).subscribe(data => {
      this.exists = data;
      if (this.exists === true) {
        this.router.navigate(['/login']);
      }
    });
  }
}
