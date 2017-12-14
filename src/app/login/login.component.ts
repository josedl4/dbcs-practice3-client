import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  selectedType: string;

  types = [
    'admin',
    'coach'
  ];

  errorMessage = '';

  constructor(private loginService: LoginService,
    public router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  onSubmit() {
    console.log(this.username + ' ' + this.password + ' ' + this.selectedType);
    this.loginService.logIn(this.username, this.password)
      .then((response) => {
        localStorage.setItem('username', this.username);
        this.routingByType(this.selectedType);
      })
      .catch((error: any) => {
        if (error.status === 400) {
          this.errorMessage = 'You must send the username and the password';
        } else {
          this.errorMessage = 'The username or password dont match';
        }
      });
  }

  routingByType(type: string): void {
    switch (type) {
      case 'admin': {
        this.router.navigate(['/admin']);
        break;
      }

      case 'coach': {
        this.router.navigate(['/coach-add']);
        break;
      }
    }
  }

}
