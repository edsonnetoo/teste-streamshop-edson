import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './layout/header/header.component';
import { CardModule } from 'primeng/card';
import { FilmesComponent } from './layout/filmes/filmes.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { BarraPesquisaComponent } from './layout/barra-pesquisa/barra-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmesComponent,
    CinemaComponent,
    CadastroComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    DividerModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
