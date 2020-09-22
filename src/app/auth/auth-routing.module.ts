import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RecoverComponent } from './recover/recover.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'nopage', pathMatch: 'full'},
  {path: 'confirmUser', component: ConfirmUserComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'recover', component: RecoverComponent },
  {path: 'recoverPassword', component: RecoverPasswordComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
