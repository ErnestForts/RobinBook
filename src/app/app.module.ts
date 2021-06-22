import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './pages/chat/chat.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoritosLibrosComponent } from './pages/favoritos-libros/favoritos-libros.component';
import { HeaderFavoritosComponent } from './components/header-favoritos/header-favoritos.component';
import { DetalleLibrosComponent } from './pages/detalle-libros/detalle-libros.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { PaginaLibrosComponent } from './pages/pagina-libros/pagina-libros.component';
import { NuevoLugarComponent } from './pages/nuevo-lugar/nuevo-lugar.component';
import { LugaresFavoritosComponent } from './pages/lugares-favoritos/lugares-favoritos.component';
import { LugarComponent } from './pages/lugar/lugar.component';
import { MisChatsComponent } from './pages/mis-chats/mis-chats.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { PerfilRankingComponent } from './pages/perfil-ranking/perfil-ranking.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FooterVacioComponent } from './components/footer-vacio/footer-vacio.component';
import { HeaderMapasComponent } from './components/header-mapas/header-mapas.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FooterLoginComponent } from './components/footer-login/footer-login.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastFavoritosComponent } from './components/toast-favoritos/toast-favoritos.component';
import { ToastBorrarfavComponent } from './components/toast-borrarfav/toast-borrarfav.component';
import { StarComponent } from './components/star/star.component';
import { EditMiPerfilComponent } from './pages/edit-mi-perfil/edit-mi-perfil.component';
import { ToastLibromailComponent } from './components/toast-libromail/toast-libromail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipes/filter.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    FooterComponent,
    RegisterFormComponent,
    PerfilRankingComponent,
    ChatComponent,
    PerfilComponent,
    LoginComponent,
    LoginFormComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    PaginaLibrosComponent,
    HeaderMapasComponent,
    FavoritosLibrosComponent,
    HeaderFavoritosComponent,
    DetalleLibrosComponent,
    NuevoLibroComponent,
    NuevoLugarComponent,
    LugaresFavoritosComponent,
    LugarComponent,
    MisChatsComponent,
    FooterVacioComponent,
    MapaComponent,
    MiPerfilComponent,
    NosotrosComponent,
    HeaderFavoritosComponent,
    FooterLoginComponent,
    NewPasswordComponent,
    ToastFavoritosComponent,
    ToastBorrarfavComponent,
    StarComponent,
    EditMiPerfilComponent,
    ToastLibromailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    NoopAnimationsModule,
    Ng2SearchPipeModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
