import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats/chats';
import { Mensajes } from 'src/app/models/chats/mensajes';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatVista: Chats;
  public mensajesVista: Mensajes[];

  constructor(private chatService: ChatService) { 
    this.chatVista = this.chatService.getChatRoomDetail();
    console.log(this.chatVista);

  }

  ngOnInit(): void {
  }

}
