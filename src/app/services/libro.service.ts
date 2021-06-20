import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../models/libro/libro';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url: string;
  private libros: Libro[];
  public libroDetail: Libro;
  public libroDetailFav: Libro;
  public librosFav: Libro[];

  constructor(private http: HttpClient) { 
    this.url = 'https://robinbook.herokuapp.com/book';
    this.mostrarLibrosFav();
  }

  obtenerLibros(token): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(this.url, options);
  }

  mostrarLibros(): void {
  let token = JSON.parse(localStorage.getItem('user')).token;
  this.obtenerLibros(token).subscribe( (result: any) => {
     this.libros = result.data;
    });
  }

  obtenerLibro(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/${id}`, options);
  }

  setLibroDetail(libroDetail: Libro) {
    this.libroDetail = libroDetail;
  }

  anyadirLibro(libro: Libro, token): any {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.post(this.url + "/new", libro, options).subscribe( (result: any) => {
      console.log(result);
    });
  }

  anyadirLibroFav(libroFav, token): any {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.post(this.url + "/newfav", libroFav, options).subscribe( (result: any) => {
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

  borrarlibroFav(libroFav, token): any {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers, body: libroFav };
    return this.http.delete(this.url + "/deletefav", options).subscribe( (result: any) => {
      console.log(result);
    });
  }

  mostrarLibrosFav(): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.obtenerLibrosFav(id, token).subscribe( (result: any) => {
      this.librosFav = result.data;
      });
  }

  obtenerLibrosFav(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/fav/${id}`, options);
  }

  obtenerComentsById(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/coment/${id}`, options);
  }

  anyadirComent(rawComent, token): any {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.post(this.url + "/coment", rawComent, options).subscribe( (result: any) => {
      console.log(result);
    });
  }
}