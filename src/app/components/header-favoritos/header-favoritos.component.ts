import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

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
  src;
  @Input()
  alt;
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
