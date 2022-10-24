import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './layout/filmes/filmes.component';
import { CinemaComponent } from './pages/cinema/cinema.component';

const routes: Routes = [
  {path: 'cinema/:id', component: CinemaComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '', component: FilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
