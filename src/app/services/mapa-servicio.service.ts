import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Map from 'ol/Map';

import { Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import { Lugar } from '../models/lugar/lugar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapaServicioService {

  public map : Map;
  public vectorSource : VectorSource;
  public vectorLayer : VectorLayer;
  private url = 'https://robinbook.herokuapp.com/place';
  public lugares : Lugar[];
  public info; 
  public lugarDetail: Lugar;

  constructor(private http : HttpClient) { 
  }

  //REQUESTS
  obtenerLugares(token) : Observable<any> {

    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };

    return this.http.get(this.url, options);

  }

  obtenerLugar(id: string, token) : Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/${id}`, options);
  }

  setLugarDetail(lugarDetail: Lugar) {

    // console.log("Ahora este es el bueno "+lugarDetail.Lugar_id);
    this.lugarDetail = lugarDetail;

  }

  lugarNuevo(lugar : Lugar, token) : any {

    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };

    return this.http.post(this.url + "/new", lugar, options).subscribe( (result: any) => {
      
      console.log(result);
      
    });

  }

  editarLugar(lugar : Lugar) : any {

    return this.http.put(this.url, lugar).subscribe( (result: any) => {
      console.table(result);
    });

  }

  borrarLugar(id: string): any {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}), body: { id: `${id}`}};
    return this.http.delete(this.url, options).subscribe( (result: any) => {
      console.table(result);
    });
  }

  anyadirLugarFav(lugarFav, token): any {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.post(this.url + "/newfav", lugarFav, options).subscribe( (result: any) => {
      console.log(result);
    });
  }

  borrarlugarFav(lugarFav, token): any {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers, body: lugarFav };
    return this.http.delete(this.url + "/deletefav", options).subscribe( (result: any) => {
      console.log(result);
    });
  }

  obtenerLugaresFav(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/fav/${id}`, options);
  }

  obtenerComentsById(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/coment/${id}`, options);
  }

  anyadirComent(rawComent, token): any {
    console.log("Rawcoment: " + rawComent);
    
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.post(this.url + "/coment", rawComent, options).subscribe( (result: any) => {
      console.log(result);
    });
  }

}
