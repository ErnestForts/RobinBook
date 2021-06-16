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


@Injectable({
  providedIn: 'root'
})
export class MapaServicioService {

  public map : Map;
  public vectorSource : VectorSource;
  public vectorLayer : VectorLayer;
  private url = 'https://robinbook.herokuapp.com/place';
  public lugares : Lugar[];

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



  //Creación del mapa
  initializeMap(mapa : Map, lugares : Lugar[]) {    
    console.log(lugares);
    

    let coordenadas : number[][] = new Array;
    let markers : Feature[] = new Array;

    const layers = [
      new TileLayer({
        source: new OSM()
      }),
    ];

    const view= new View({
      constrainResolution: true,
      projection: 'EPSG:3857',
      center: olProj.fromLonLat([-3.7, 40.41]),
      zoom: 5
    });

    this.vectorSource = new VectorSource({});
    this.vectorLayer = new VectorLayer({source: this.vectorSource});


    for (let i = 0; i < lugares.length; i++) {
      
        let lonLat = [lugares[i].longitud, lugares[i].latitud]
        
        coordenadas.push(lonLat);
    }

    for (let i = 0; i < coordenadas.length; i++) {

      let pin = new Feature({

        geometry: new Point(olProj.fromLonLat([coordenadas[i][0], coordenadas[i][1]]))
      
      }); 

      markers.push(pin);

    }
    
    const markerStyle = new Style({

      image: new Icon({

        anchor: [0.5, 1],
        crossOrigin: 'anonymous',
        src: 'assets/icons/marker.png',
        scale: 1,

      }),
    
    });

    for (let i = 0; i < markers.length; i++) {
      markers[i].setStyle(markerStyle)
    }

    console.log(markers);
    

    this.vectorSource.addFeatures(markers);

    mapa = new Map({
      target: 'mapa',
      layers: layers,
      view: view
    });

    mapa.addLayer(this.vectorLayer);

    return mapa;

  }

}
