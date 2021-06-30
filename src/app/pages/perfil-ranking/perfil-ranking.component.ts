import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/models/libro/libro';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';
import { LibroService } from 'src/app/services/libro.service';
import { ServerService } from 'src/app/services/server.service';
import { Chats } from 'src/app/models/chats/chats';

@Component({
  selector: 'app-perfil-ranking',
  templateUrl: './perfil-ranking.component.html',
  styleUrls: ['./perfil-ranking.component.css']
})
export class PerfilRankingComponent implements OnInit {

  public usuario:User;
  public books:Libro[];
  public routeState: any;
  public noBooks: boolean;
  public stars = [1, 2, 3, 4, 5];
  public sameUser: boolean = false;
  public newChatRoom: boolean = true;
  public chatRooms: Chats[];
  public lugarRoom: number;


  constructor(private router: Router, private route: ActivatedRoute, private apiService: LibroService, private chatService : ChatService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if (this.routeState) {
        this.usuario = this.routeState.user ? JSON.parse(this.routeState.user) : '';
      }
    }
    this.getBooks(); 
    this.compararDatos();
    this.mostrarChatsRooms();

    // this.server.get(`/book/fav/${this.usuario.user_id}`).subscribe((response: any) => {
    //   this.books = response.data;
    //   console.log(this.books);
    //   if(!this.books.length){
    //     this.noBooks = true; 
    //   }
      
    //   this.books.forEach(element => {
    //     element.puntuacion = Math.round(element.PuntosTotales/element.VecesPuntuado);
    //   });
    //S})
   }

  sendLibroDetail(Titulo, Autor, Descripcion, Foto, Genero, libro_id) {
    let libroDetail = new Libro(Titulo, Autor, Foto, Descripcion, Genero, libro_id);
    this.apiService.setLibroDetail(libroDetail);
  }

  getBooks(){
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerLibrosFav(this.usuario.user_id.toString(),token).subscribe( (response : any) => {
      this.books = response.data;
      if(!this.books.length){
        this.noBooks = true; 
      }
      
      this.books.forEach(element => {
        element.puntuacion = Math.round(element.PuntosTotales/element.VecesPuntuado);
      });
    });
  }

  compararDatos(){

    const myId = JSON.parse(localStorage.getItem('user')).user.user_id;

    if(this.usuario.user_id == myId ){

      this.sameUser = true;

    }
  }

  /******************************* PARA EL CHAT *************************/

  ngOnInit(): void {
    setTimeout(()=>{
      this.newOrNotChatRoom(this.usuario.user_id);
    }, 250);
  }

  mostrarChatsRooms() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.chatService.getChatRooms(id, token).subscribe( (result: any) => {
      this.chatRooms = result.data;
      });
  }

  newOrNotChatRoom(user_id) {
    for(let chats of this.chatRooms) {
      if(chats.user_id_origen === user_id || chats.user_id_destino === user_id) {
        this.newChatRoom = false;
        this.lugarRoom = this.chatRooms.indexOf(chats);
      }
    }
    let chatRoom = this.chatRooms[this.lugarRoom];
    this.chatService.setChatRoomDetail(chatRoom);
  }

  createChatRoom(user_id) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    let newRoom = { user_id_origen: id, user_id_destino: user_id };
    this.chatService.crearChatRoom(newRoom, token).subscribe( (result: any) => {
    });
    setTimeout(() => {
      this.router.navigate(['/perfil/mis-chats']);
    }, 300)
  }  
} 
