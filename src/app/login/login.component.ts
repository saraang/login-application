import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Sarang';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginEvent(){
    if(this.username === "Sarang" && this.password === "12345"){
      //welcome
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}