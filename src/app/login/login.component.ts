import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  loginEvent(){
    if(this.username === "Sarang" && this.password === "112233"){
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}