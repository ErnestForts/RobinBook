import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Map from 'ol/Map';
import View from 'ol/View';
import Icon from 'ol/style/Icon';
import * as olProj from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {OSM, TileWMS, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import Style from 'ol/style/Style';
import { Lugar } from '../models/lugar/lugar';
import { Observable } from 'rxjs';
import { Overlay } from 'ol';


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
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.post(this.url + "/coment", rawComent, options).subscribe( (result: any) => {
      console.log(result);
    });
  }

}
