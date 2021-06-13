import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mapas',
  templateUrl: './header-mapas.component.html',
  styleUrls: ['./header-mapas.component.css']
})
export class HeaderMapasComponent implements OnInit {

  @Input()
  title;
  @Input()
  id;
  @Input()
  id2;
  @Input()
  src;
  @Input()
  src2;
  @Input()
  alt;
  @Input()
  alt2;

  constructor() { }

  ngOnInit(): void {
  }

}
