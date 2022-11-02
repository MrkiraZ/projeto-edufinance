import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register-account', component: RegisterAccountComponent},
  {path: 'sobre', component: SobreComponent},


  {path: '**', component:ErroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
