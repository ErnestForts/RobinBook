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
  id3;
  @Input()
  src;
  @Input()
  src2;
  @Input()
  alt;
  @Input()
  alt2;
  @Input()
  router1;
  @Input()
  router2;

  constructor() { }

  ngOnInit(): void {
  }

}
