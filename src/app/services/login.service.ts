import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = 'https://localhost:44350';

  constructor(
    private httpClient: HttpClient
  ) { }

  login(user){
    return this.httpClient.post(`${this.url}/users/login`, user);
  }

  register(user){
    return this.httpClient.post(`${this.url}/users/register`, user);
  }

  confirmUser(user){
    return this.httpClient.post(`${this.url}/users/userConfirm`, user);
  }

  recoverUser(user){
    return this.httpClient.post(`${this.url}/users/codePasswordReset`, user);
  }

  recoverPassword(user){
    return this.httpClient.post(`${this.url}/users/passwordReset`, user);
  }
}
