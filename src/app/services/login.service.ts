import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  username: string

  constructor() { 
    this.username = ''
  }

  login(username){
    this.username = username
  }

  checkEmptyUsername(){
    return this.username.length == 0
  }

}
