import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public map : Map;
  
  constructor(public mapaServicio : MapaServicioService) { }

  ngOnInit(){
    this.mapaServicio.initializeMap(this.map);
  }

}