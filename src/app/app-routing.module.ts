import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresFavoritosComponent } from './pages/lugares-favoritos/lugares-favoritos.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { NuevoLugarComponent } from './pages/nuevo-lugar/nuevo-lugar.component';

const routes: Routes = [
  {path:"mapa", component: MapaComponent},
  {path:"nuevo-lugar", component: NuevoLugarComponent},
  {path:"", component: LugaresFavoritosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
