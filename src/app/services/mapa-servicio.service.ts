import { Injectable } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import TileJSON from 'ol/source/TileJSON';

@Injectable({
  providedIn: 'root'
})
export class MapaServicioService {

  public mapa : Map;
  punto1;
  punto2;
  vectorSource;
  vectorLayer;
  rasterLayer;

  constructor() { }

  initializeMap(mapa : Map) {

    // this.punto1.setStyle(new Style({
    //   image: new Icon(({
    //     color: '#8959A8',
    //     crossOrigin: 'anonymous',
    //     src: 'src\assets\icons\image.svg',
    //     imgSize: [20, 20]
    //   }))
    // }))

    // this.punto1 = new Feature({
    //   geometry: new Point(olProj.fromLonLat([-3.7, 40.41]))
    // });

    // this.vectorSource = new VectorSource({
    //   features: [this.punto1, this.punto2]
    // });

    // this.vectorLayer = new VectorLayer({
    //   source: this.vectorSource
    // });

    // this.rasterLayer = new TileLayer({
    //   source: new TileJSON({
    //     url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
    //     crossOrigin: ''
    //   })
    // });

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
