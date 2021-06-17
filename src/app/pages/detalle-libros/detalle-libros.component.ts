import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { Librofav } from 'src/app/models/libro/librofav';
import { LibroService } from 'src/app/services/libro.service';
import { Coments } from 'src/app/models/coments/coments';
import { Rawcoments } from 'src/app/models/coments/rawcoments';

@Component({
  selector: 'app-detalle-libros',
  templateUrl: './detalle-libros.component.html',
  styleUrls: ['./detalle-libros.component.css']
})
export class DetalleLibrosComponent implements OnInit {

public libroVista: Libro;
public coments: Coments[];

  constructor(private apiService: LibroService) { 
    this.libroVista = this.apiService.libroDetail;
    this.mostrarComents(this.libroVista.libro_id);
  }

  mostrarComents(id: string): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerComentsById(id, token).subscribe( (result: any) => {
      console.table(result.data);
      this.coments = result.data;
      });
  }

  sendFav(id_Libro) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let libroFav = new Librofav(id_User, id_Libro);
    this.apiService.anyadirLibroFav(libroFav, token);
  }

  sendComent(coment, libro_id) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_user = JSON.parse(localStorage.getItem('user')).user.user_id;
    let rawComent = new Rawcoments(libro_id, id_user, coment);
    this.apiService.anyadirComent(rawComent, token).subscribe( (result: any) => {
      console.table(result.data);
      this.coments = result.data;
      });
  }

  ngOnInit(): void {
  }

}
