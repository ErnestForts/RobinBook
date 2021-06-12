import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-lugares-favoritos',
  templateUrl: './header-lugares-favoritos.component.html',
  styleUrls: ['./header-lugares-favoritos.component.css']
})
export class HeaderLugaresFavoritosComponent implements OnInit {

  @Input()
  title;
  @Input()
  id;
  @Input()
  src;
  @Input()
  alt;

  constructor(public _location: Location) { }

  ngOnInit(): void {
  }

}
