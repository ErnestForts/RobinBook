import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chats } from '../models/chats/chats';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url: string;
  private chatRoom: Chats;

  constructor(private http: HttpClient) { 
    this.url = 'https://robinbook.herokuapp.com/chat';
  }

  getChatRooms(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(`${this.url}/get/${id}`, options);
  }

  setChatRoomDetail(chatRoom: Chats) {
    this.chatRoom = chatRoom;
  }

  getChatRoomDetail() {
    return this.chatRoom;
  }

}
