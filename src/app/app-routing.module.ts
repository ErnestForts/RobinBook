import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { PerfilRankingComponent } from './pages/perfil-ranking/perfil-ranking.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: "ranking", component: RankingComponent },
  { path: "perfilRanking", component: PerfilRankingComponent},
  { path: "chat", component: ChatComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
