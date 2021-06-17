import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public usuarios:User[];
  constructor(private server: ServerService, private router: Router) {

    this.server.get('/api/users').subscribe((response: any) => {

      this.usuarios = response.data;
      console.log(response.data);
      
    })
   }

  ngOnInit(): void {
  }

  userDetail(i:Number){
    console.log(i);
    
  }

}
