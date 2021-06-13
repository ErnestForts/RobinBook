import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-favoritos',
  templateUrl: './header-favoritos.component.html',
  styleUrls: ['./header-favoritos.component.css']
})
export class HeaderFavoritosComponent implements OnInit {

  @Input()
  title;
  @Input()
  id;
  @Input()
  id2;
  @Input()
  src;
  @Input()
  alt;
  @Input()
  class;

  constructor(public _location: Location) { }

  ngOnInit(): void {
  }

}
