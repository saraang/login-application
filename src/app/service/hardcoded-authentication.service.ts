import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticate(username, password){

      if(username === "Sarang" && password === "12345"){
        return true;
      }
      return false;
  }
}