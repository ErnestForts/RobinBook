import { Component, OnInit } from '@angular/core';
import { Coments } from 'src/app/models/comentsLibros/coments';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';
import { Lugarfav } from 'src/app/models/lugar/lugarfav';
import { RawcomentsLugar } from 'src/app/models/comentsLugar/rawcoments-lugar';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  public lugarVista : Lugar;
  public tieneLibro : boolean;
  public coments: Coments[];

  constructor(private mapaServicio: MapaServicioService) { 

    this.lugarVista = this.mapaServicio.lugarDetail;
    // console.log(this.lugarVista.tieneLibro);
    this.mostrarComents(this.lugarVista.Lugar_id);

    
    this.tieneLibro = this.lugarVista.tieneLibro;
      
  }

  mostrarComents(id: string): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.mapaServicio.obtenerComentsById(id, token).subscribe( (result: any) => {
      // console.table(result.data);
      this.coments = result.data;
      });
  }

  sendFav(id_Lugar) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let lugarFav = new Lugarfav(id_User, id_Lugar);
    this.mapaServicio.anyadirLugarFav(lugarFav, token);
  }

  sendComent(coment, lugar_id) {

    console.log("INTERESA"+coment, lugar_id);
    
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_user = JSON.parse(localStorage.getItem('user')).user.user_id;
    let rawComent = new RawcomentsLugar(lugar_id, id_user, coment);
    this.mapaServicio.anyadirComent(rawComent, token);

  }

  ngOnInit(): void {
  }

}
