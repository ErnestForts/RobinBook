import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLibrosComponent } from './pages/detalle-libros/detalle-libros.component';
import { FavoritosLibrosComponent } from './pages/favoritos-libros/favoritos-libros.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { PaginaLibrosComponent } from './pages/pagina-libros/pagina-libros.component';

const routes: Routes = [
  {path:"", component: MapaComponent},
  {path:"libros", component: PaginaLibrosComponent},
  {path:"favoritos", component: FavoritosLibrosComponent},
  {path:"detalle", component: DetalleLibrosComponent},
  {path:"nuevo", component: NuevoLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
