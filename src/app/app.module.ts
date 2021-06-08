import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterVacioComponent } from './components/footer-vacio/footer-vacio.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMapasComponent } from './components/header-mapas/header-mapas.component';
import { RankingComponent } from './page/ranking/ranking.component';
import { HeaderRankingComponent } from './components/header-ranking/header-ranking.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterVacioComponent } from './components/footer-vacio/footer-vacio.component';
import { HeaderMapasComponent } from './components/header-mapas/header-mapas.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    FooterComponent,
    FooterVacioComponent,
    HeaderMapasComponent,
    HeaderRankingComponent
    MapaComponent,
    FooterComponent,
    FooterVacioComponent,
    HeaderMapasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
