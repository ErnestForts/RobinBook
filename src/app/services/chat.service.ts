import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://robinbook.herokuapp.com/book';
  }
}
