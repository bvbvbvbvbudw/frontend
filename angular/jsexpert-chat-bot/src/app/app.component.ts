import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsexpert-chat-bot';
  links = [
    {path: '/main', label: 'Головна', active: 'button-active'},
    {path: '/chat', label: 'Чат', active: 'button-active'},
  ];
}
