import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-toast-libromail',
  templateUrl: './toast-libromail.component.html',
  styleUrls: ['./toast-libromail.component.css']
})
export class ToastLibromailComponent implements OnInit {

  constructor(private apiService: LibroService) { }

  enviarEmail(email: string) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let user = JSON.parse(localStorage.getItem('user')).user.Nombre;
    this.apiService.mailRecomendar(email, token, user)
  }

  ngOnInit(): void {
  }

}
