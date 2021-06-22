import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Map from 'ol/Map';
import { Lugar } from 'src/app/models/lugar/lugar';
import { MapaServicioService } from 'src/app/services/mapa-servicio.service';

@Component({
  selector: 'app-editar-lugar',
  templateUrl: './editar-lugar.component.html',
  styleUrls: ['./editar-lugar.component.css']
})
export class EditarLugarComponent implements OnInit {


  public map : Map;
  public placeLat : number;
  public placeLon : number;
  public placeForm : FormGroup;
  public lugar : Lugar;
  
  constructor(private fb: FormBuilder, public mapaServicio : MapaServicioService, private snackBar: MatSnackBar) { 
    this.lugar = this.mapaServicio.lugarModificable;

  }

  ngOnInit(){
    this.placeForm = this.fb.group({
      txtFoto: this.lugar.Foto,
      txtNombre: this.lugar.Nombre,
      txtDescripcion: this.lugar.Descripcion
    });
  }

  editar() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.lugar.Foto = this.placeForm.get('txtFoto').value;
    this.lugar.Nombre = this.placeForm.get('txtNombre').value;
    this.lugar.Descripcion = this.placeForm.get('txtDescripcion').value;
    this.mapaServicio.editarLugar(this.lugar, token).subscribe((response:any) => {
      if(response.success == 1){

        this.snackBar.open('Datos modificados!','Vale',{
          duration: 2500,
          verticalPosition: 'bottom', // Allowed values are  'top' | 'bottom'
          horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
        });
      }else{
        console.log(response);
        this.snackBar.open('Ha surgido un error. Los cambios no serán permanentes.','Vale',{
          duration: 2500,
          verticalPosition: 'bottom', // Allowed values are  'top' | 'bottom'
          horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
        });
      }
    })
  }

  onSubmit(){
    if (!this.placeForm.valid) {
      console.log('invalid form');
      return;
    }
    this.editar();
  }
}