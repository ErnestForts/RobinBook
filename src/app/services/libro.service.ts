import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../models/libro/libro';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://robinbook.herokuapp.com/book';
  }

  obtenerLibros(token): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(this.url, options);
  }

  obtenerLibro(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/${id}`, options);
  }

  anyadirLibro(libro: Libro, token): any {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.post(this.url + "/new", libro, options).subscribe( (result: any) => {
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
