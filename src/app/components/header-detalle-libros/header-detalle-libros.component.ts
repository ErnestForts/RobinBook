import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-detalle-libros',
  templateUrl: './header-detalle-libros.component.html',
  styleUrls: ['./header-detalle-libros.component.css']
})
export class HeaderDetalleLibrosComponent implements OnInit {

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
