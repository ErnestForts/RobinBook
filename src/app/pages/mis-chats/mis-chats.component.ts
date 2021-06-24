import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats/chats';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-mis-chats',
  templateUrl: './mis-chats.component.html',
  styleUrls: ['./mis-chats.component.css']
})
export class MisChatsComponent implements OnInit {

  public chatRooms: Chats[];

  constructor(private chatService: ChatService) { 
    this.mostrarChatsRooms();
  }

  mostrarChatsRooms() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.chatService.getChatRooms(id, token).subscribe( (result: any) => {
      this.chatRooms = result.data;
      });
  }

  sendChatRoomDetail(user_id_origen, user_id_destino, id_chatRoom, Nombre, Email, Foto) {
    let chatRoom = new Chats(user_id_origen, user_id_destino, id_chatRoom, Nombre, Email, Foto);
    this.chatService.setChatRoomDetail(chatRoom);
  }

  ngOnInit(): void {
  }

}
