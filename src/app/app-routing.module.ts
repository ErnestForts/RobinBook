import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './pages/mapa/mapa.component';
import { PaginaLibrosComponent } from './pages/pagina-libros/pagina-libros.component';

const routes: Routes = [
  {path:"", component: MapaComponent},
  {path:"libros", component: PaginaLibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
