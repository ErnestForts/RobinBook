import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugarComponent } from './pages/lugar/lugar.component';
import { LugaresFavoritosComponent } from './pages/lugares-favoritos/lugares-favoritos.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MisChatsComponent } from './pages/mis-chats/mis-chats.component';
import { NuevoLugarComponent } from './pages/nuevo-lugar/nuevo-lugar.component';

const routes: Routes = [
  {path:"mapa", component: MapaComponent},
  {path:"mapa/nuevo-lugar", component: NuevoLugarComponent},
  {path:"mapa/lugares-favoritos", component: LugaresFavoritosComponent},
  {path:"mapa/lugares-favoritos/lugarlugar", component: LugarComponent},
  {path:"mi-perfil/mis-chats", component: MisChatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
