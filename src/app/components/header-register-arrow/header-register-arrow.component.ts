import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-register-arrow',
  templateUrl: './header-register-arrow.component.html',
  styleUrls: ['./header-register-arrow.component.css']
})
export class HeaderRegisterArrowComponent implements OnInit {

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
