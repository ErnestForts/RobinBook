import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';


@Component({
  selector: 'app-nuevo-lugar',
  templateUrl: './nuevo-lugar.component.html',
  styleUrls: ['./nuevo-lugar.component.css']
})
export class NuevoLugarComponent implements OnInit {

  public map : Map;
  public userLat : number;
  public userLon : number;
  public lugares : Lugar[];
  
  constructor(public mapaServicio : MapaServicioService) { }

  ngOnInit(){

    this.getUserLocation();    
    
  }

  getUserLocation() {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition( (position) => {

        this.userLat = position.coords.latitude;
        this.userLon = position.coords.longitude;
         
      });

    } else {

      // console.log("Not allowed");

    }

  }

  nuevoLugar(nombre : string, descripcion : string, foto : string, latitud : string, longitud : string) {
    let nuevoLugar = new Lugar(nombre, descripcion, foto, Number(latitud), Number(longitud));
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.mapaServicio.lugarNuevo(nuevoLugar, token);
  }
  
}

