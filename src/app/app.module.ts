import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { LoginComponent } from './components/login/login.component';
import { AdmGestaoUsuariosComponent } from './components/adm-gestao-usuarios/adm-gestao-usuarios.component';
import { HistoricoCarteiraComponent } from './components/historico-carteira/historico-carteira.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProfileComponent,
    RegisterAccountComponent,
    LoginComponent,
    AdmGestaoUsuariosComponent,
    HistoricoCarteiraComponent,
    SobreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
