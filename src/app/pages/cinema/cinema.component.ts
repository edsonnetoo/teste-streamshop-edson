import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  public filme : any;

  filmeId: any;

  dadosFilme: any
  

  constructor(private api : ApiService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.filmeId = this.route.snapshot.paramMap.get('id')
    
    this.api.getEventosById(this.filmeId).subscribe(res => {
      this.filme = res;
    })

    this.api.getCinemas(this.filmeId).subscribe(res => {
      this.dadosFilme = res;
    })
  }

  redirectCadastro() {
    window.location.href = '/cadastro';
  }

}
