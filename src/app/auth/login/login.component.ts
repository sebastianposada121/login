import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  changeForm: boolean;
  error: boolean;
  token: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.changeForm = true;
    this.error = false;
  }

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required]
  });

  login() {
    console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('home');
          this.token = res["token"];
          localStorage.setItem('token', this.token);
        }, err => {
          this.error = true;
        }
      );
  }

  register() {
    this.loginService.register(this.registerForm.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('confirmUser');
      }, err => {
        this.error = true;
      }
    );
  }
}
