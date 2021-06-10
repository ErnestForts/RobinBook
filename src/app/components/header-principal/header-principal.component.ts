import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/change-header.service';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

  public title: string

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

}
