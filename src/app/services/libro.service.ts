import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../models/libro/libro';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url: string;
  public libros: Libro[];

  constructor(private http: HttpClient) { 
    this.url = 'https://robinbook.herokuapp.com/book';
    this.libros = [];
  }

  obtenerLibros(): Observable<any> {
    return this.http.get(this.url);
  }

  obtenerlibro(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  añadirLibro(libro: Libro): any {
    return this.http.post(this.url, libro).subscribe( (result: any) => {
      console.log(result);
    });
  }

  editarLibro(libro: Libro): any {
    return this.http.put(this.url, libro).subscribe( (result: any) => {
      console.table(result);
    });
  }

  borrarlibro(id: string): any {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}), body: { id: `${id}`}};
    return this.http.delete(this.url, options).subscribe( (result: any) => {
      console.table(result);
    });
  }


}
