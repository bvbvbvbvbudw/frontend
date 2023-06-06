import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
export class Message {
  constructor(public author: string, public content: string) {}
}
 
@Injectable() export class ChatService {
  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap: {[key: string]: string} = {
    "Привіт": "Вітаю вас",
    "Хто Ви?": "Я Ангулар бот, що б ви хотіли дізнатись?",
    "Коли очікувати наступний курс?": "Наступний курс починається 22 травня, приходьте",
    "Дякую": "Прошу, завжди радий допомогти",
    "Hi": "Hello",
    "Who are you": "My name is Agular Bot",
    "What is Angular": "Angular is the best framework ever",
    "default": "I can't understand. Can you please repeat"
  }
  
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
      }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question]; // question
    return answer || this.messageMap['default'];
  }
}