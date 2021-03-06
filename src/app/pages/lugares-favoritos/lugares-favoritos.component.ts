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
  public stars = [1, 2, 3, 4, 5];
  public noBooks: boolean;

  constructor(private mapaServicio : MapaServicioService) { 
    this.mostrarLugaresFav();
    
  }

  mostrarLugaresFav() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.mapaServicio.obtenerLugaresFav(id, token).subscribe( (result : any) => {
      this.lugaresFav = result.data;
      for (let i = 0; i < this.lugaresFav.length; i++) {
        this.lugaresFav[i].puntuacion = Math.round(this.lugaresFav[i].PuntosTotales/this.lugaresFav[i].VecesPuntuado);
      }
      if(!this.lugaresFav.length){
        this.noBooks = true; 
      }
    });
  }

  sendValueIdDetail(Nombre, Descripcion, Foto, latitud, longitud, tieneLibro, lugar_id, puntosTotales, vecesPuntuado) {
    let lugarDetail = new Lugar(Nombre, Descripcion, Foto, latitud, longitud, tieneLibro, lugar_id, puntosTotales, vecesPuntuado);    
    this.mapaServicio.setLugarDetail(lugarDetail);
  }

  ngOnInit(): void {
  }

}
