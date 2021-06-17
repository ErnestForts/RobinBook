import { Component, OnInit } from '@angular/core';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';

@Component({
  selector: 'app-lugares-favoritos',
  templateUrl: './lugares-favoritos.component.html',
  styleUrls: ['./lugares-favoritos.component.css']
})
export class LugaresFavoritosComponent implements OnInit {

  public lugaresFav: Lugar[];

  constructor(private mapaServicio : MapaServicioService) { 
    this.mostrarLugaresFav();
  }

  ngOnInit(): void {
  }

  mostrarLugaresFav() {

    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.mapaServicio.obtenerLugaresFav(id, token).subscribe( (result : any) => {
      this.lugaresFav = result.data;
      });

  }

  sendValueIdDetail(Nombre, Descripcion, Foto, latitud, longitud, tieneLibro, lugar_id) {

    let lugarDetail = new Lugar(Nombre, Descripcion, Foto, latitud, longitud, tieneLibro, lugar_id);
    // console.log("CONSOLEANDO "+lugarDetail.Lugar_id);
    
    this.mapaServicio.setLugarDetail(lugarDetail);

  }

}
