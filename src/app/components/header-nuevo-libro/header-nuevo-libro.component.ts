import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-nuevo-libro',
  templateUrl: './header-nuevo-libro.component.html',
  styleUrls: ['./header-nuevo-libro.component.css']
})
export class HeaderNuevoLibroComponent implements OnInit {

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
