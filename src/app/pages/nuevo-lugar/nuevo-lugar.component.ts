import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';


@Component({
  selector: 'app-nuevo-lugar',
  templateUrl: './nuevo-lugar.component.html',
  styleUrls: ['./nuevo-lugar.component.css']
})
export class NuevoLugarComponent implements OnInit {

  public map : Map;
  
  constructor(public mapaServicio : MapaServicioService) { }

  ngOnInit(){
    this.mapaServicio.initializeMap(this.map);
  }

}
