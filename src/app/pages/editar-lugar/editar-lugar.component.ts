import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';

@Component({
  selector: 'app-editar-lugar',
  templateUrl: './editar-lugar.component.html',
  styleUrls: ['./editar-lugar.component.css']
})
export class EditarLugarComponent implements OnInit {


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

  editar(nombre : string, descripcion : string, foto : string, latitud : string, longitud : string) {
    let nuevoLugar = new Lugar(nombre, descripcion, foto, Number(latitud), Number(longitud));
    let token = JSON.parse(localStorage.getItem('user')).token;
    // console.log(latitud, longitud);
    this.mapaServicio.editarLugar(nuevoLugar, token);
  }
 

}
