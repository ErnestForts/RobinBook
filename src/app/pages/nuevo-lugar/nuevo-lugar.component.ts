import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
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
  public ubicacion : number[];
  public lugares : Lugar[];
  
  constructor(public mapaServicio : MapaServicioService) { }

  ngOnInit(){

    // this.mapaServicio.initializeMap(this.map);
    // this.mapaServicio.addMarkers(this.map, this.lugares);
    this.getUserLocation();    
    console.log(this.ubicacion);
    
  }

  getUserLocation() {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition( (position) => {

       this.asignarValor(position.coords.latitude, position.coords.longitude);
         
      });

    }else {
      console.log("User not allow")
    }

  }

  asignarValor(lat : number, lon : number){
  
    this.userLat = lat;
    this.userLon = lon;
    this.ubicacion = [this.userLat, this.userLon];    
    
  };
  
}

