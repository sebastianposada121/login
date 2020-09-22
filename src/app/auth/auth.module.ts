import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RecoverComponent } from './recover/recover.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


@NgModule({
  declarations: [
    ConfirmUserComponent,
    LoginComponent,
    HomeComponent,
    RecoverComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
