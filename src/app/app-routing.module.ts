import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilRankingComponent } from './pages/perfil-ranking/perfil-ranking.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: "ranking", component: RankingComponent }
  { path: "perfilRanking", component: PerfilRankingComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
