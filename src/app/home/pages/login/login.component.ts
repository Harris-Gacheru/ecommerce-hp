import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  isLoading: boolean = false
  error: string = ''
  msg: string = ''

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedin) {
      this.router.navigate(['/admin'])  
    }
  }

  submit(){
    this.isLoading = true
    this.authService.login()

    setTimeout(() => {
      this.isLoading = false
      this.router.navigate(['/admin'])
    }, 3000);
  }
}
