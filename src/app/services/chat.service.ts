import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/map'
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'

 
@Injectable()
export class ChatService {
  username: string
  messages: AngularFireList<Message>
  constructor(private db: AngularFireDatabase) { 
    this.username = ''
  }

  login(username){
    this.username = username
  }

  checkEmptyUsername(){
    return this.username.length == 0
  }

  getUserName(){
    return this.username
  }

  listMessages(){
    this.messages = this.db.list('messages')
    return this.messages
  }

  addMessage(message: Message){
    this.messages.push(message)
  }

}
