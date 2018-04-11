import { Component, OnInit } from '@angular/core';
import { Credential } from '../../models/credential'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string

  constructor(private serv: ChatService) {
    this.resetForm()
    this.username = ''
   }

  ngOnInit() {

  }

  setUserName(){
    this.serv.login(this.username)
  }

  checkEmptyUsername(){
      return this.serv.checkEmptyUsername()
  }
  resetForm(){
    this.username = ''
  }

}
