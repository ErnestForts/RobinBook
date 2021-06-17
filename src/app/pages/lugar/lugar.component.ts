import { Component, OnInit } from '@angular/core';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  public lugarVista : Lugar;
  public tieneLibro : boolean;

  constructor(private apiService: MapaServicioService) { 

    this.lugarVista = this.apiService.lugarDetail;
    console.log(this.lugarVista.tieneLibro);
    
    this.tieneLibro = this.lugarVista.tieneLibro;
      
  }

  ngOnInit(): void {
  }

}
