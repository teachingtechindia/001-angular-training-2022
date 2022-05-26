import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'at-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  emailInputChanged(event: any) {
    this.email = event.target['value'];
  }

  passwordInputChanged(event: any) {
    this.password = event.target['value'];
  }

  onSignin() {
    console.log('Signin clicked', this.email, this.password);
    this.authService
      .signin(this.email, this.password)
      .subscribe((loginResponse: any) => {
        console.log(loginResponse);
        window.localStorage.setItem('token', loginResponse.token);
        window.localStorage.setItem('id', loginResponse.id);
        window.localStorage.setItem('email', loginResponse.email);

        this.router.navigateByUrl('/home');
      });
  }
}
