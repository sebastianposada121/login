import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  changeP: string = 'register';
  changeForm: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ){
      this.changeForm = true;
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

    confirmUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      confirmationCode: ['', Validators.required]
    });

    login(){
      console.log(this.loginForm.value)
      this.loginService.login(this.loginForm.value).subscribe(res => console.log(res));
    }

    register(){
      this.loginService.register(this.registerForm.value).subscribe(res => console.log(res));
    }

    confirmUser(){
      this.loginService.confirmUser(this.confirmUserForm.value).subscribe(res => console.log(res));
    }
}
