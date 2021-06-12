import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-mi-perfil',
  templateUrl: './header-mi-perfil.component.html',
  styleUrls: ['./header-mi-perfil.component.css']
})
export class HeaderMiPerfilComponent implements OnInit {

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
