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
  title2;
  @Input()
  id;
  @Input()
  id2;
  @Input()
  id3;
  @Input()
  src;
  @Input()
  src2;
  @Input()
  src3;
  @Input()
  alt;
  @Input()
  alt2;
  @Input()
  router;

  constructor(public _location: Location) { }

  ngOnInit(): void {
  }

}