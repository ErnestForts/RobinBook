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


   }

  ngOnInit(){

    // this.addMarkersF();
    this.cargarLugares();
    
  }

   cargarLugares() {
    // const token = JSON.parse(localStorage.getItem('user')).token;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcl9pZCI6MTgsIk5vbWJyZSI6Ikp1YW4iLCJBcGVsbGlkbyI6IlBlcmV6IiwiRW1haWwiOiJlbWFpbFAiLCJUZWxlZm9ubyI6bnVsbCwiRm90byI6bnVsbCwiRnJhc2UiOm51bGwsInJhbmtpbmciOm51bGx9LCJpYXQiOjE2MjM4NTk5MTEsImV4cCI6MTYyMzkwMzExMX0.iYw_5Hru763XVucBcVjTccOoNVmu6fhSlIcQaxKlkdo';
    this.mapaServicio.obtenerLugares(token).subscribe( (result: any) => {
      this.lugares = result.data;
      this.mapaServicio.initializeMap(this.map, this.lugares);
      });
  }

}
