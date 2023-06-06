import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ChatService]
})
export class AngularBotModule { };

