import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  route: string;
  constructor(@Inject(DOCUMENT) private document: Document,public location: Location,public router: Router) {

   }

  ngOnInit(): void {
    
  }

  showBar(){

    if(this.router.url == "/register" || this.router.url == "/forgot"){
      return true;
    }else{
      return false;
    }
    
  }

}
