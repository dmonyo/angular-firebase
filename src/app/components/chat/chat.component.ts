import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/Message';
import { ChatService } from '../../services/chat.service';
import { element } from 'protractor';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[]
  message: Message
  constructor(private serv: ChatService) { 
    
  }

  ngOnInit() {
    this.resetMessageForm()
    this.serv.listMessages().snapshotChanges().subscribe(
      response => {
        this.messages = []
        response.forEach(item=>{
          var payload = item.payload.toJSON()
          payload['$key'] = item.key
          this.messages.push(payload as Message)
        })
      }
    )
  }
  resetMessageForm() {
    this.message = {
      username: "",
      message: ''
    }
  }

  sendMessage(){
    this.message.username = this.serv.getUserName()
    this.serv.addMessage(this.message)
    this.resetMessageForm()
  }

  userIsLogedIn(){
    return !this.serv.checkEmptyUsername()
  }

}
