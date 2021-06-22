import { Component, OnInit } from '@angular/core';
import { Coments } from 'src/app/models/comentsLibros/coments';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';
import { Lugarfav } from 'src/app/models/lugar/lugarfav';
import { RawcomentsLugar } from 'src/app/models/comentsLugar/rawcoments-lugar';
import {MatDialog} from '@angular/material/dialog';
import { ToastFavoritosComponent } from 'src/app/components/toast-favoritos/toast-favoritos.component';
import { ToastBorrarfavComponent } from 'src/app/components/toast-borrarfav/toast-borrarfav.component';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  public lugarVista : Lugar;
  public tieneLibro : boolean;
  public coments: Coments[];
  public lugaresFav: Lugar[];
  public esFavorito : boolean = false;
  public stars = [1, 2, 3, 4, 5];
  public rating : number = 1;
  public hoverState : number = 0;

  constructor(private mapaServicio: MapaServicioService, public dialog: MatDialog) { 
    this.lugarVista = this.mapaServicio.lugarDetail;
    // console.log(this.lugarVista.tieneLibro);
    this.mostrarComents(this.lugarVista.Lugar_id);
    
    this.tieneLibro = this.lugarVista.tieneLibro;
    this.mostrarLugaresFav();      


  }

  mostrarComents(id: string): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.mapaServicio.obtenerComentsById(id, token).subscribe( (result: any) => {
      // console.table(result.data);
      this.coments = result.data;
      });
  }

  mostrarLugaresFav() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.mapaServicio.obtenerLugaresFav(id, token).subscribe( (result : any) => {

      console.log(result.data);
      this.lugaresFav = result.data;

      for(let lugar of this.lugaresFav) {
        if(lugar.Lugar_id == this.lugarVista.Lugar_id) {
          
          this.esFavorito = true;
          console.log(this.esFavorito);
          break;
          
        } else {

          this.esFavorito = false;
          console.log(this.esFavorito);

        }
      }
    });
  }

  sendFav(id_Lugar) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let lugarFav = new Lugarfav(id_User, id_Lugar);
    this.mapaServicio.anyadirLugarFav(lugarFav, token);
    this.esFavorito = true;
  }

  guardadoFav() {
    this.dialog.open(ToastFavoritosComponent);
  }

  borrarFav(id_Lugar) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id_User = JSON.parse(localStorage.getItem('user')).user.user_id;
    let lugarFav = new Lugarfav(id_User, id_Lugar);
    this.mapaServicio.borrarlugarFav(lugarFav, token);
    this.esFavorito = false;
  }

  borradoFav() {
    this.dialog.open(ToastBorrarfavComponent);
  }

  sendComent (coment, lugar_id) {

    if (coment != "") {
      let token = JSON.parse(localStorage.getItem('user')).token;
      let id_user = JSON.parse(localStorage.getItem('user')).user.user_id;
      let rawComent = new RawcomentsLugar(lugar_id, id_user, coment);
    
      this.mapaServicio.anyadirComent(rawComent, token);
      setTimeout(()=>{
        this.mostrarComents(lugar_id);
      }, 500)      
    } else {
      console.log("comentario vacío");
    }  
  }

  ngOnInit(): void {
  }

  //ESTRELLAS
  onStarEnter(starId : number){
    this.hoverState = starId;
    console.log(this.hoverState);
    
  }

  onStarLeave(){
    this.hoverState = 0;
    console.log(this.hoverState);

  }

  onStarClicked(starId : number){
    this.rating = starId;
    console.log(this.rating);
    
  }

}
