import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  public listaFilmes : any;

  idFilme : any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getEventos().subscribe(res=>{
      this.listaFilmes = res;
    })
  }

  redirectCinema(itemId: string) {
    window.location.href = '/cinema/' + itemId;
  }
}
