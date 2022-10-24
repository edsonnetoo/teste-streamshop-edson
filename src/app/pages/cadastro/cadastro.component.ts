import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [MessageService]
})
export class CadastroComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  pageRedirect(){
    this.messageService.add({key: 'br' ,severity:'success', summary: 'Successo!', detail: 'Cadastro Finalizado!'});

    setTimeout(function(){
     window.location.href = "/";
    },2000);
    
  }

  ngOnInit(): void {
  }

  

}
