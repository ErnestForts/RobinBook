import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { PerfilRankingComponent } from './pages/perfil-ranking/perfil-ranking.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RankingComponent } from './pages/ranking/ranking.component';

import { LoginFormComponent } from './pages/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: "ranking", component: RankingComponent },
  { path: "perfilRanking", component: PerfilRankingComponent},
  { path: "chat", component: ChatComponent},
  { path: "perfil", component: PerfilComponent},
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
  },
  {path: 'settings', component: SettingsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
