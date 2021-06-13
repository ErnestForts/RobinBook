import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './pages/chat/chat.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLibrosComponent } from './components/header-libros/header-libros.component';
import { FavoritosLibrosComponent } from './pages/favoritos-libros/favoritos-libros.component';
import { HeaderFavoritosComponent } from './components/header-favoritos/header-favoritos.component';
import { DetalleLibrosComponent } from './pages/detalle-libros/detalle-libros.component';
import { HeaderDetalleLibrosComponent } from './components/header-detalle-libros/header-detalle-libros.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { PaginaLibrosComponent } from './pages/pagina-libros/pagina-libros.component';
import { NuevoLugarComponent } from './pages/nuevo-lugar/nuevo-lugar.component';
import { LugaresFavoritosComponent } from './pages/lugares-favoritos/lugares-favoritos.component';
import { HeaderLugaresFavoritosComponent } from './components/header-lugares-favoritos/header-lugares-favoritos.component';
import { LugarComponent } from './pages/lugar/lugar.component';
import { HeaderLugarComponent } from './components/header-lugar/header-lugar.component';
import { MisChatsComponent } from './pages/mis-chats/mis-chats.component';
import { HeaderMisChatsComponent } from './components/header-mis-chats/header-mis-chats.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { HeaderRankingComponent } from './components/header-ranking/header-ranking.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { PerfilRankingComponent } from './pages/perfil-ranking/perfil-ranking.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { HeaderVacioComponent } from './components/header-vacio/header-vacio.component';
import { HeaderRegisterArrowComponent } from './components/header-register-arrow/header-register-arrow.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FooterVacioComponent } from './components/footer-vacio/footer-vacio.component';
import { HeaderMapasComponent } from './components/header-mapas/header-mapas.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { HeaderPerfilComponent } from './components/header-perfil/header-perfil.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HeaderNosotrosComponent } from './components/header-nosotros/header-nosotros.component';
import { HeaderMiPerfilComponent } from './components/header-mi-perfil/header-mi-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    FooterComponent,
    HeaderRankingComponent,
    RegisterFormComponent,
    PerfilRankingComponent,
    ChatComponent,
    PerfilComponent,
    LoginComponent,
    LoginFormComponent,
    HeaderVacioComponent,
    HeaderRegisterArrowComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    PaginaLibrosComponent,
    HeaderMapasComponent,
    HeaderLibrosComponent,
    FavoritosLibrosComponent,
    HeaderFavoritosComponent,
    DetalleLibrosComponent,
    HeaderDetalleLibrosComponent,
    NuevoLibroComponent,
    NuevoLugarComponent,
    LugaresFavoritosComponent,
    HeaderLugaresFavoritosComponent,
    LugarComponent,
    HeaderLugarComponent,
    MisChatsComponent,
    HeaderMisChatsComponent,
    FooterVacioComponent,
    MapaComponent,
    MiPerfilComponent,
    HeaderPerfilComponent,
    NosotrosComponent,
    HeaderNosotrosComponent,
    HeaderMiPerfilComponent
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
