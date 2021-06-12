import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-nuevo-lugar',
  templateUrl: './header-nuevo-lugar.component.html',
  styleUrls: ['./header-nuevo-lugar.component.css']
})
export class HeaderNuevoLugarComponent implements OnInit {

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
