import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { PerfilRankingComponent } from './pages/perfil-ranking/perfil-ranking.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { DetalleLibrosComponent } from './pages/detalle-libros/detalle-libros.component';
import { FavoritosLibrosComponent } from './pages/favoritos-libros/favoritos-libros.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { PaginaLibrosComponent } from './pages/pagina-libros/pagina-libros.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LugarComponent } from './pages/lugar/lugar.component';
import { LugaresFavoritosComponent } from './pages/lugares-favoritos/lugares-favoritos.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MisChatsComponent } from './pages/mis-chats/mis-chats.component';
import { NuevoLugarComponent } from './pages/nuevo-lugar/nuevo-lugar.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';

const routes: Routes = [
  {path:"", redirectTo: '/login', pathMatch: 'full'},
  {path:"ranking", component: RankingComponent },
  {path:"ranking/perfil", component: PerfilRankingComponent},
  {path:"ranking/perfil/chat", component: ChatComponent, data: {titulo: "libros" }},
  {path:"perfil", component: PerfilComponent},
  {path:"perfil/mis-chats", component: MisChatsComponent},
  {path:"perfil/mi-perfil", component: MiPerfilComponent},
  {path:"perfil/settings", component: SettingsComponent},
  {path:"libros", component: PaginaLibrosComponent},
  {path:"libros/favoritos", component: FavoritosLibrosComponent},
  {path:"libros/detalle", component: DetalleLibrosComponent},
  {path:"libros/nuevo", component: NuevoLibroComponent},
  {path:"mapa", component: MapaComponent},
  {path:"mapa/nuevo", component: NuevoLugarComponent},
  {path:"mapa/favoritos", component: LugaresFavoritosComponent},
  {path:"mapa/detalle", component: LugarComponent},
  {path: 'login', component: LoginComponent,
    children: [
    {
      outlet: 'login',
      path: '',
      component: LoginFormComponent
    }
    ]
  },
  {path: 'register', component: LoginComponent,
    children: [
    {
      outlet: 'register',
      path: '',
      component: RegisterFormComponent
    }
    ]
  },
  {path: 'forgot', component: LoginComponent,
    children: [
    {
      outlet: 'forgot',
      path: '',
      component: ForgotPasswordComponent
    }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
