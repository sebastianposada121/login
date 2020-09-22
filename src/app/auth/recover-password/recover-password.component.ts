import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  error: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { 
    this.error = false;
   }

  passwordUserForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmationCode: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  return(){
    this.router.navigateByUrl('login');
  }
  passwordUser(){
    this.loginService.recoverPassword(this.passwordUserForm.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('login');
      }, err => {
        this.error = true;
      }
    );
  }

}
