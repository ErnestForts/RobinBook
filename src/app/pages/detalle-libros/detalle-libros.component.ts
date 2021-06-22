import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { Librofav } from 'src/app/models/libro/librofav';
import { LibroService } from 'src/app/services/libro.service';
import { Coments } from 'src/app/models/comentsLibros/coments';
import { Rawcoments } from 'src/app/models/comentsLibros/rawcoments';
import { MatDialog } from '@angular/material/dialog';
import { ToastFavoritosComponent } from 'src/app/components/toast-favoritos/toast-favoritos.component';
import { ToastBorrarfavComponent } from 'src/app/components/toast-borrarfav/toast-borrarfav.component';
import { ToastLibromailComponent } from 'src/app/components/toast-libromail/toast-libromail.component';

@Component({
  selector: 'app-detalle-libros',
  templateUrl: './detalle-libros.component.html',
  styleUrls: ['./detalle-libros.component.css']
})
export class DetalleLibrosComponent implements OnInit {
  
public libroVista: Libro;
public coments: Coments[];
public librosFav: Libro[];
public contadorLike: string;
public esFavorito : boolean = false;
public stars = [1, 2, 3, 4, 5];
public rating : number = 1;
public hoverState : number = 0;

  constructor(private apiService: LibroService, public dialog: MatDialog) { 
    this.libroVista = this.apiService.libroDetail;
    this.mostrarComents(this.libroVista.libro_id);
    this.mostrarLibrosFav();      

  }

  mostrarComents(id: string) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerComentsById(id, token).subscribe( (result: any) => {
      this.coments = result.data;
      console.log(this.coments);
      });
  }

  sendFav(id_Libro) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let libroFav = new Librofav(id_User, id_Libro);
    this.apiService.anyadirLibroFav(libroFav, token);
    this.esFavorito = true;
  }

  borrarFav(id_Libro) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let libroFav = new Librofav(id_User, id_Libro);
    this.apiService.borrarlibroFav(libroFav, token);
    this.esFavorito = false;
  }

  guardadoFav() {
    this.dialog.open(ToastFavoritosComponent);
  }

  borradoFav() {
    this.dialog.open(ToastBorrarfavComponent);
  }

  enviarMail() {
    this.dialog.open(ToastLibromailComponent);
  }

  sendComent(coment, libro_id) {

    if (coment != "") {
      let token = JSON.parse(localStorage.getItem('user')).token;
      let id_user = JSON.parse(localStorage.getItem('user')).user.user_id;
      let rawComent = new Rawcoments(libro_id, id_user, coment);
    
      this.apiService.anyadirComent(rawComent, token);
      setTimeout(()=>{
        this.mostrarComents(libro_id);
      }, 500)      
    } else {
      console.log("comentario vacío");
    }
  }

  mostrarLibrosFav() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.apiService.obtenerLibrosFav(id, token).subscribe( (result : any) => {

      console.log(result.data);
      this.librosFav = result.data;

      for(let lugar of this.librosFav) {
        if(lugar.libro_id == this.libroVista.libro_id) {
          
          this.esFavorito = true;
          console.log(this.esFavorito);
          break;
          
        } else {

          this.esFavorito = false;
          console.log(this.esFavorito);

        }
      }
    });
  }

  contadorLikes(id_ComentLibro) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = this.libroVista.libro_id;
    let datos = { id_Libro: id, id_ComentLibro: id_ComentLibro};
    this.apiService.likearComent(datos, token);
    setTimeout(()=>{
      this.mostrarComents(this.libroVista.libro_id);
    }, 500)  

  }
  
  ngOnInit(): void {
  }

  //ESTRELLAS
  onStarEnter(starId : number){
    this.hoverState = starId;
    console.log(this.hoverState);
    
  }

  onStarLeave(){
    this.hoverState = 0;
    console.log(this.hoverState);

  }

  onStarClicked(starId : number){
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;

    this.rating = starId;
    console.log(this.rating);

    let datos = {
      libro_id: this.libroVista.libro_id,
      id_Libro: this.libroVista.libro_id,
      id_User: id,
      user_id: id
    }

    this.apiService.puntuar(datos, token);
    
  }
  
}
