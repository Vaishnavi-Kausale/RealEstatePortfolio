import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router)
  {

  }

  DoLogin(form:NgForm)
  {
    console.log(form)
    localStorage.setItem('login','1');
    this.router.navigateByUrl('home')
  }
}
