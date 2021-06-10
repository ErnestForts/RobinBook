import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterVacioComponent } from './components/footer-vacio/footer-vacio.component';
import { HeaderMapasComponent } from './components/header-mapas/header-mapas.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { HeaderRankingComponent } from './components/header-ranking/header-ranking.component';
import { PerfilRankingComponent } from './pages/perfil-ranking/perfil-ranking.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HeaderVacioComponent } from './components/header-vacio/header-vacio.component';
import { HeaderRegisterArrowComponent } from './components/header-register-arrow/header-register-arrow.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLibrosComponent } from './components/header-libros/header-libros.component';
import { FavoritosLibrosComponent } from './pages/favoritos-libros/favoritos-libros.component';
import { HeaderFavoritosComponent } from './components/header-favoritos/header-favoritos.component';
import { DetalleLibrosComponent } from './pages/detalle-libros/detalle-libros.component';
import { HeaderDetalleLibrosComponent } from './components/header-detalle-libros/header-detalle-libros.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { HeaderNuevoLibroComponent } from './components/header-nuevo-libro/header-nuevo-libro.component';
import { PaginaLibrosComponent } from './pages/pagina-libros/pagina-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    FooterComponent,
    FooterVacioComponent,
    HeaderMapasComponent,
    HeaderRankingComponent,
    RegisterFormComponent,
    FooterVacioComponent,
    HeaderMapasComponent,
    PerfilRankingComponent,
    ChatComponent,
    PerfilComponent,
    LoginComponent,
    LoginFormComponent,
    FooterVacioComponent,
    HeaderMapasComponent,
    HeaderVacioComponent,
    HeaderRegisterArrowComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    PaginaLibrosComponent,
    FooterVacioComponent,
    HeaderMapasComponent,
    HeaderLibrosComponent,
    FavoritosLibrosComponent,
    HeaderFavoritosComponent,
    DetalleLibrosComponent,
    HeaderDetalleLibrosComponent,
    NuevoLibroComponent,
    HeaderNuevoLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
