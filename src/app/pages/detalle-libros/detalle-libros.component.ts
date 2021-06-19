import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { Librofav } from 'src/app/models/libro/librofav';
import { LibroService } from 'src/app/services/libro.service';
import { Coments } from 'src/app/models/comentsLibros/coments';
import { Rawcoments } from 'src/app/models/comentsLibros/rawcoments';
import { MatDialog } from '@angular/material/dialog';
import { ToastFavoritosComponent } from 'src/app/components/toast-favoritos/toast-favoritos.component';
import { ToastBorrarfavComponent } from 'src/app/components/toast-borrarfav/toast-borrarfav.component';

@Component({
  selector: 'app-detalle-libros',
  templateUrl: './detalle-libros.component.html',
  styleUrls: ['./detalle-libros.component.css']
})
export class DetalleLibrosComponent implements OnInit {
  
public libroVista: Libro;
public coments: Coments[];
public Show: boolean;
public librosFav: Libro[];


  constructor(private apiService: LibroService, public dialog: MatDialog) { 
    this.libroVista = this.apiService.libroDetail;
    this.mostrarComents(this.libroVista.libro_id);
    this.librosFav = this.apiService.librosFav;
    this.Show = this.inFav();
  }

  mostrarComents(id: string) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerComentsById(id, token).subscribe( (result: any) => {
      this.coments = result.data;
      });
  }

  sendFav(id_Libro) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let libroFav = new Librofav(id_User, id_Libro);
    this.apiService.anyadirLibroFav(libroFav, token);
  }

  borrarFav(id_Libro) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let libroFav = new Librofav(id_User, id_Libro);
    this.apiService.borrarlibroFav(libroFav, token);
  }

  guardadoFav() {
    this.dialog.open(ToastFavoritosComponent);
  }

  borradoFav() {
    this.dialog.open(ToastBorrarfavComponent);
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

  inFav(): boolean {
    let result: boolean= false;
    for(let libro of this.librosFav) {
      if(libro.libro_id == this.libroVista.libro_id) {
        result = true;
      } 
    }
    return result;
  }


  ngOnInit(): void {
  }
}
