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
  public user_id: string;

  constructor(private chatService: ChatService) {
    this.chatVista = this.chatService.getChatRoomDetail();
    this.user_id = JSON.parse(localStorage.getItem('user')).user.user_id;
  }

  mostrarMensajes(id: string) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.chatService.obtenerMensajesById(id, token).subscribe( (result: any) => {
      this.mensajesVista = result.data;
      });
  }

  sendComent(mensaje) {

    if (mensaje != "") {
      let token = JSON.parse(localStorage.getItem('user')).token;
      let user_id = JSON.parse(localStorage.getItem('user')).user.user_id;
      let sendMensaje = new Mensajes(this.chatVista.id_chatRoom, mensaje, user_id);    
      this.chatService.anyadirMensaje(sendMensaje, token);
      setTimeout(()=>{
        this.mostrarMensajes(this.chatVista.id_chatRoom);
      }, 400)      
    } else {
      console.log("comentario vacío");
    }
  }


  ngOnInit(): void {
    this.mostrarMensajes(this.chatVista.id_chatRoom);
  }

}
