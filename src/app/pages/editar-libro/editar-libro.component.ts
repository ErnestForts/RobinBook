import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from 'src/app/models/libro/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  public bookForm : FormGroup;
  public libro : Libro;
  
  constructor(private fb: FormBuilder, public apiService : LibroService, private snackBar: MatSnackBar) { 
    this.libro = this.apiService.libroModificable;

  }

  ngOnInit(){
    this.bookForm = this.fb.group({
      txtFoto: this.libro.Foto,
      txtTitulo: this.libro.Titulo,
      txtDescripcion: this.libro.Descripcion,
      txtAutor: this.libro.Autor,
      txtGenero: this.libro.Genero
    });
    console.log(this.libro);
    
  }

  editar() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.libro.Foto = this.bookForm.get('txtFoto').value;
    this.libro.Titulo = this.bookForm.get('txtTitulo').value;
    this.libro.Descripcion = this.bookForm.get('txtDescripcion').value;
    this.libro.Autor = this.bookForm.get('txtAutor').value;
    this.libro.Genero = this.bookForm.get('txtGenero').value;

    this.apiService.editarLibro(this.libro, token).subscribe((response:any) => {
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
    if (!this.bookForm.valid) {
      console.log('invalid form');
      return;
    }
    this.editar();
  }

}
