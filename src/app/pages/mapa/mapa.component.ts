import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public map : Map;
  public lugares : Lugar[];
  
  constructor(public mapaServicio : MapaServicioService) {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData);
  
   }

  ngOnInit(){
    this.mapaServicio.initializeMap(this.map);
    // this.mapaServicio.addMarkers(this.map, this.lugares);

  }

}
