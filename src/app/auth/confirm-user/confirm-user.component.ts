import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss']
})
export class ConfirmUserComponent implements OnInit {

  error: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { 
    this.error = false;
   }

  confirmUserForm = this.formBuilder.group({
    username: ['', Validators.required],
    confirmationCode: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  return(){
    this.router.navigateByUrl('login');
  }
  confirmUser(){
    this.loginService.confirmUser(this.confirmUserForm.value)
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
