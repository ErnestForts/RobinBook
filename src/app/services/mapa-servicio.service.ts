import { Injectable } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
// import VectorLayer from 'ol/layer/Vector';
// import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
// import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
// import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
// import VectorSource from 'ol/source/Vector';
import TileJSON from 'ol/source/TileJSON';
import Geolocation from 'ol/Geolocation';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import { Overlay } from 'ol';
import Style from 'ol/style/Style';
import Projection from 'ol/proj/Projection';


@Injectable({
  providedIn: 'root'
})
export class MapaServicioService {

  public map : Map;
  punto1;
  punto2;
  vectorSource;
  vectorLayer;
  rasterLayer;
  geolocation;

  constructor() { }

  initializeMap(mapa : Map) {


    const view= new View({
      projection: 'EPSG:4326',
      center: olProj.fromLonLat([-3.7, 40.41]),
      zoom: 5
    });

    mapa = new Map({
      target: 'mapa',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: view

    });

    this.vectorSource = new VectorSource({});
    this.vectorLayer = new VectorLayer({source: this.vectorSource});

    let marker = new Feature({
      geometry: new Point([-3.7, 40.41])
    }); 

    marker.getGeometry().transform(new Projection({code: 'EPSG:4326'}), new Projection({code: 'EPSG:4326'}));

    this.vectorSource.addFeature(marker);

    mapa.addLayer(this.vectorLayer);

  }

}
