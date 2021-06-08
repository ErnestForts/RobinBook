import { Injectable } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

@Injectable({
  providedIn: 'root'
})
export class MapaServicioService {

  public mapa : Map;

  constructor() { }

  initializeMap(mapa : Map) {
    mapa = new Map({
      target: 'mapa',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([-3.7, 40.41]),
        zoom: 5
      })
    });
  }

}
