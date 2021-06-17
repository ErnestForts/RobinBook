import { Component, OnInit } from '@angular/core';
import { Coments } from 'src/app/models/coments/coments';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';
import { Lugarfav } from 'src/app/models/lugar/lugarfav';
import { Rawcoments } from 'src/app/models/coments/rawcoments';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  public lugarVista : Lugar;
  public tieneLibro : boolean;
  public coments: Coments[];

  constructor(private apiService: MapaServicioService) { 

    this.lugarVista = this.apiService.lugarDetail;
    console.log(this.lugarVista);
    
    this.tieneLibro = this.lugarVista.tieneLibro;
      
  }

  mostrarComents(id: string): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerComentsById(id, token).subscribe( (result: any) => {
      console.table(result.data);
      this.coments = result.data;
      });
  }

  sendFav(id_Lugar) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let lugarFav = new Lugarfav(id_User, id_Lugar);
    this.apiService.anyadirLugarFav(lugarFav, token);
  }

  sendComent(coment, lugar_id) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_user = JSON.parse(localStorage.getItem('user')).user.user_id;
    let rawComent = new Rawcoments(lugar_id, id_user, coment);
    this.apiService.anyadirComent(rawComent, token);
  }

  ngOnInit(): void {
  }

}
