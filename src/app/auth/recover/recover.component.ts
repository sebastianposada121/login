import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {

  error: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  confirmUserForm = this.formBuilder.group({
    username: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  return(){
    this.router.navigateByUrl('login');
  }

  confirmUser(){
    this.loginService.recoverUser(this.confirmUserForm.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('recoverPassword');
      }, err => {
        this.error = true;
      }
    );
  }
}
