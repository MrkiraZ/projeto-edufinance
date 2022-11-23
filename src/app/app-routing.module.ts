import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { HistoricoCarteiraComponent } from './components/historico-carteira/historico-carteira.component';
import { AdminComponent } from './components/admin/admin.component';
import { GestaoComponent } from './components/admin/gestao/gestao.component';
import { DicasComponent } from './components/dicas/dicas.component';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { ModeloComponent } from './components/artigos/modelo/modelo.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dicas',component: DicasComponent},
  {path: 'artigos',component: ArtigosComponent},
  {path: 'modelo',component: ModeloComponent},
  //register/login
  {path: 'login',component: LoginComponent},
  {path: `admin`,component: AdminComponent},
  {path: 'register-account', component: RegisterAccountComponent},
  //profile e menus
  {path: 'sobre', component: SobreComponent},
  {path: `profile`, component: ProfileComponent, canActivate:[AuthGuardGuard]},
  {path: `dashboard`,component:DashboardComponent,canActivate:[AuthGuardGuard]},
  {path: `carteiras`, component:HistoricoCarteiraComponent,canActivate:[AuthGuardGuard]},
  {path: 'gestao',component:GestaoComponent},
  //error page
  {path: '**', component:ErroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
