import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { Librofav } from 'src/app/models/libro/librofav';
import { LibroService } from 'src/app/services/libro.service';
import { Coments } from 'src/app/models/comentsLibros/coments';
import { Rawcoments } from 'src/app/models/comentsLibros/rawcoments';

@Component({
  selector: 'app-detalle-libros',
  templateUrl: './detalle-libros.component.html',
  styleUrls: ['./detalle-libros.component.css']
})
export class DetalleLibrosComponent implements OnInit {

public libroVista: Libro;
public coments: Coments[];
public librosFav: Libro[];


  constructor(private apiService: LibroService) { 
    this.libroVista = this.apiService.libroDetail;
    this.mostrarComents(this.libroVista.libro_id);
    this.mostrarLibrosFav();
  }

  mostrarComents(id: string): void {
    
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerComentsById(id, token).subscribe( (result: any) => {
      console.table(result.data);
      this.coments = result.data;
      });
  }

    mostrarLibrosFav() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.apiService.obtenerLibrosFav(id, token).subscribe( (result: any) => {
      console.table(result.data);
      this.librosFav = result.data;
      });
  }

  sendFav(id_Libro) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    // for(let libro of libroFav) {
    //   if(libro.id_Libro == id_Libro) {

    //   }
    // }
    // let token = JSON.parse(localStorage.getItem('user')).token;
    // let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let libroFav = new Librofav(id_User, id_Libro);
    this.apiService.anyadirLibroFav(libroFav, token);
  }

  sendComent(coment, libro_id) {
    
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_user = JSON.parse(localStorage.getItem('user')).user.user_id;
    let rawComent = new Rawcoments(libro_id, id_user, coment);
    
    this.apiService.anyadirComent(rawComent, token);
  }

  ngOnInit(): void {
  }

}
