import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-lugar',
  templateUrl: './header-lugar.component.html',
  styleUrls: ['./header-lugar.component.css']
})
export class HeaderLugarComponent implements OnInit {

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
