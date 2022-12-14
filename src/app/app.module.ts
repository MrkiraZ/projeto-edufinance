import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

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
import { ErroComponent } from './components/erro/erro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { GestaoComponent } from './components/admin/gestao/gestao.component';
import { DicasComponent } from './components/dicas/dicas.component';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { ModeloComponent } from './components/artigos/modelo/modelo.component';
import { SegurancaComponent } from './components/seguranca/seguranca.component';
import { SubListaUsuarioPipe } from './pipes/sub-lista-usuario.pipe';
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
    FooterComponent,
    ErroComponent,
    DashboardComponent,
    AdminComponent,
    GestaoComponent,
    DicasComponent,
    ArtigosComponent,
    ModeloComponent,
    SegurancaComponent,

    SubListaUsuarioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
