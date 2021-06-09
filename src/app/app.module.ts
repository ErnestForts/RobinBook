import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterVacioComponent } from './components/footer-vacio/footer-vacio.component';
import { HeaderMapasComponent } from './components/header-mapas/header-mapas.component';
import { NuevoLugarComponent } from './pages/nuevo-lugar/nuevo-lugar.component';
import { HeaderNuevoLugarComponent } from './components/header-nuevo-lugar/header-nuevo-lugar.component';
import { LugaresFavoritosComponent } from './pages/lugares-favoritos/lugares-favoritos.component';
import { HeaderLugaresFavoritosComponent } from './components/header-lugares-favoritos/header-lugares-favoritos.component';
import { LugarComponent } from './pages/lugar/lugar.component';
import { HeaderLugarComponent } from './components/header-lugar/header-lugar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    FooterComponent,
    FooterVacioComponent,
    HeaderMapasComponent,
    NuevoLugarComponent,
    HeaderNuevoLugarComponent,
    LugaresFavoritosComponent,
    HeaderLugaresFavoritosComponent,
    LugarComponent,
    HeaderLugarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
