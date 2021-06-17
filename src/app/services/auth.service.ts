import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;
  private user_id: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private server: ServerService) {
    console.log('Auth Service');
    const userData = localStorage.getItem('user');
    if (userData) {
      console.log('Logged in from memory');
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);
    }
  }

  login(user) {
    if (user.txtEmail !== '' && user.txtPassword !== '' ) {     
      return this.server.request('POST', '/api/users/login', {
        Email: user.txtEmail,
        Password: user.txtPassword
      }).subscribe((response: any) => {
        if (response.auth === true && response.token !== undefined) {
          this.token = response.token;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token,
            user: response.user
          };
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigateByUrl('/mapa');
        }
      });
    }else{
      return undefined
    }
  }

  forgot(data){   
    if (data.txtEmail !== '') {     
      return this.server.request('PUT', '/api/users/forgot-password', {
        Email: data.txtEmail,
      }).subscribe((response: any) => {
        if (response.emailStatus != 'OK') {
          return undefined
        }
        return response
      });
    }else{
      return undefined
    }
  }

  logout() {
    this.server.setLoggedIn(false);
    delete this.token;

    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }
}