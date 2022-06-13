import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin: boolean = false

  constructor() { }

  login(){
    this.isLoggedin = true
  }

  logout(){
    this.isLoggedin = false
  }
}
