import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Icon from 'ol/style/Icon';
import * as olProj from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {
  OSM,
  TileWMS,
  Vector as VectorSource
} from 'ol/source';
import {
  Tile as TileLayer,
  Vector as VectorLayer
} from 'ol/layer';
import Style from 'ol/style/Style';
import {
  Overlay
} from 'ol';
import {
  Lugar
} from 'src/app/models/lugar/lugar';
import {
  MapaServicioService
} from 'src/app/services/mapa-servicio.service';
import { toStringHDMS } from 'ol/coordinate';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public map: Map;
  public vectorSource: VectorSource;
  public vectorLayer: VectorLayer;
  public lugares: Lugar[];
  public info;

  constructor(public mapaServicio: MapaServicioService) {
    this.info = {
      nombre: 'nombre',
              foto: 'foto',
              descripcion: 'descripcion',
              tieneLibro: 'tieneLibro',
              lugar_id: 'lugar_id'
    }
  }

  ngOnInit() {

    this.cargarLugares();

  }

  cargarLugares() {
    const token = JSON.parse(localStorage.getItem('user')).token;
    let container = document.getElementById('popup');
    let content = document.getElementById('popup-content');
    let closer = document.getElementById('popup-closer');

    const layers = [
      new TileLayer({
        source: new OSM()
      }),
    ];

    const view = new View({
      constrainResolution: true,
      projection: 'EPSG:3857',
      center: olProj.fromLonLat([-3.7, 40.41]),
      zoom: 5
    });

    const markerStyle = new Style({

      image: new Icon({

        anchor: [0.5, 0.9],
        crossOrigin: 'anonymous',
        src: 'assets/icons/marker.png',
        scale: 1,

      }),

    });

    this.map = new Map({
      target: 'mapa',
      layers: layers,
      view: view
    });

    console.log(this.map);
    
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcl9pZCI6MTgsIk5vbWJyZSI6Ikp1YW4iLCJBcGVsbGlkbyI6IlBlcmV6IiwiRW1haWwiOiJlbWFpbFAiLCJUZWxlZm9ubyI6bnVsbCwiRm90byI6bnVsbCwiRnJhc2UiOm51bGwsInJhbmtpbmciOm51bGwsInJlc2V0VG9rZW4iOm51bGx9LCJpYXQiOjE2MjM5MTAxNzEsImV4cCI6MTYyMzk1MzM3MX0.MncHVoQB2WvJ3C_8YVE1q2m8YrKwjoYzjmlgNlr0dy8';
    this.mapaServicio.obtenerLugares(token).subscribe((result: any) => {

      this.lugares = result.data;
      console.log(this.lugares);
      
      let coordenadas: number[][] = new Array;
      let markers: Feature[] = new Array;


      let popup = new Overlay({
        element: container,
        stopEvent: false,
        offset: [0, -50],
      });

      this.vectorSource = new VectorSource({});
      this.vectorLayer = new VectorLayer({
        source: this.vectorSource
      });


      this.addMarkers(this.lugares, markers, coordenadas, markerStyle);

      console.log(markers);

      this.vectorSource.addFeatures(markers);

      this.map.addLayer(this.vectorLayer);
      this.map.addOverlay(popup);

      this.map.on('singleclick',  (evt) => {
        let feature = this.map.forEachFeatureAtPixel(evt.pixel, function (feature) {
          return feature;
        });
        if (feature) {
        var coordinate = evt.coordinate;
        popup.setPosition(coordinate);
          this.info = {
            nombre: feature.get('nombre'),
            foto: feature.get('foto'),
            descripcion: feature.get('descripcion'),
            tieneLibro: feature.get('tieneLibro'),
            lugar_id: feature.get('lugar_id')
          }

          if (this.info.tieneLibro == 0) {
            this.info.tieneLibro = 'No tiene libro'
          } else{
            this.info.tieneLibro = 'Tiene libro'

          }
        content.innerHTML = `<h6>${this.info.nombre}</6>
                             <h6>${this.info.tieneLibro}</6>`;
        } else {

        }

        closer.onclick = function () {
          popup.setPosition(undefined);
          closer.blur();
          return false;
        };
      
        
      });

    });




  }

  addMarkers(lugares : Lugar[], markers : Feature[], coordenadas : number[][], markerStyle : Style){
    for (let i = 0; i < lugares.length; i++) {

      let lonLat = [lugares[i].longitud, lugares[i].latitud]

      coordenadas[i] = (lonLat);

      console.log(lugares[i].Descripcion);


      let pin = new Feature({

        geometry: new Point(olProj.fromLonLat([coordenadas[i][0], coordenadas[i][1]])),
        nombre: lugares[i].Nombre,
        foto: lugares[i].Foto,
        descripcion: lugares[i].Descripcion,
        tieneLibro: lugares[i].tieneLibro,

      });

      markers.push(pin);
      markers[i].setStyle(markerStyle);

    }
  }
}