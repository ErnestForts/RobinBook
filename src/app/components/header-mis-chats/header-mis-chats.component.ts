import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-mis-chats',
  templateUrl: './header-mis-chats.component.html',
  styleUrls: ['./header-mis-chats.component.css']
})
export class HeaderMisChatsComponent implements OnInit {

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
