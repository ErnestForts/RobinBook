import { Injectable } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Icon from 'ol/style/Icon';
import * as olProj from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {OSM, TileWMS, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import Style from 'ol/style/Style';


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

    //Este es el mapa que se muestra. Puede cambiarse por otro mapa en caso de querer hacerlo siempre que la projection sea EPSG:3857.
    const layers = [
      new TileLayer({
        source: new OSM()
      }),
    ];

    //El view determina el ratio de projection, el punto central del mapa y el nivel de zoom por defecto
    const view= new View({
      constrainResolution: true,
      projection: 'EPSG:3857',
      center: olProj.fromLonLat([-3.7, 40.41]),
      zoom: 5
    });

    //Se crea el mapa. El target hace referencia al id del elemento HTML que va a ser el mapa.- Le pasamos la imagen del mapa(layers) y la vista por defecto(view)
    mapa = new Map({
      target: 'mapa',
      layers: layers,
      view: view
    });

    //Creamos una nueva capa por encima (vacía)
    this.vectorSource = new VectorSource({});
    this.vectorLayer = new VectorLayer({source: this.vectorSource});

    //Estos son los marcadores. Se utiliza la función fromLonLat para indicar la ubicación del punto en el mapa. La función traduce los valores de las coordenadas a los valores que usa el mapa.
    let marker = new Feature({
      geometry: new Point(olProj.fromLonLat([-2.67164, 42.8467])),
    }); 

    let marker2 = new Feature({
      geometry: new Point(olProj.fromLonLat([-3.7, 40.41])),
    }); 

    //Un array para mostrar todos los puntos
    let markers = [marker, marker2]

    //Se crea el estilo del icono a mostrar en el mapa. El anchor indica cual es el punto de la imagen que debe coincidir con el punto del mapa. En este caso centrado en la X y abajo en la Y. crossOrigin es para que funcione en Internet Explorer.
    const markerStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          crossOrigin: 'anonymous',
          src: 'assets/icons/marker.png',
          scale: 1,
        }),
      });

    //Un bucle para aplicar el estilo a todos los puntos (hasta encontrar una forma de hacerlo el estilo por defecto)
    for (let i = 0; i < markers.length; i++) {
      markers[i].setStyle(markerStyle)
    }

    //Se añaden los puntos a la capa que hemos creado
    this.vectorSource.addFeatures(markers);

    //Se añade la capa al mapa para mostrarla
    mapa.addLayer(this.vectorLayer);

  }

}
