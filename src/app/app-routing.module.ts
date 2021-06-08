import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './page/ranking/ranking.component';

const routes: Routes = [
  { path: "ranking", component: RankingComponent },
  {path:"", component: MapaComponent}
]
import { MapaComponent } from './pages/mapa/mapa.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
