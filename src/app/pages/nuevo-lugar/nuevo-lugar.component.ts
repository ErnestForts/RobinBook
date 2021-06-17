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

      console.log("Not allowed");

    }

  }

  nuevoLugar(nombre : string, descripcion : string, foto : string, latitud : string, longitud : string) {
    let nuevoLugar = new Lugar(nombre, descripcion, foto, Number(latitud), Number(longitud));
    // let token = JSON.parse(localStorage.getItem('user')).token;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcl9pZCI6MTgsIk5vbWJyZSI6Ikp1YW4iLCJBcGVsbGlkbyI6IlBlcmV6IiwiRW1haWwiOiJlbWFpbFAiLCJUZWxlZm9ubyI6bnVsbCwiRm90byI6bnVsbCwiRnJhc2UiOm51bGwsInJhbmtpbmciOm51bGwsInJlc2V0VG9rZW4iOm51bGx9LCJpYXQiOjE2MjM5MTAxNzEsImV4cCI6MTYyMzk1MzM3MX0.MncHVoQB2WvJ3C_8YVE1q2m8YrKwjoYzjmlgNlr0dy8';
    console.log(latitud, longitud);
    this.mapaServicio.lugarNuevo(nuevoLugar, token);
  }
  
}

