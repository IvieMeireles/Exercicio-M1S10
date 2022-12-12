import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NOTIFICATIONS_MOCK } from 'src/app/utils/notifications-mock';
import { INotificacao } from 'src/app/models/notificacao.model';
import { ContentComponent } from '../content/content.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  notificacaoFiltrada: INotificacao[] = [];
  @Output()
  botaoClicado = new EventEmitter<string>();

  filtrarNotificacao(filtro: any) {
    console.log('Botao clicado');
    this.botaoClicado.emit('Ihu');
  }
  ngOnInit(): void {
    this.notificacaoFiltrada = NOTIFICATIONS_MOCK;

    
  }

  filtrar(filtro: string) {
    if (filtro === 'lidos') {
      this.router.navigate(['home/lidos']);
      console.log('Filtrando lidos');
      this.notificacaoFiltrada.forEach((item) => {
        if(item.lido === true){

          console.log(item.lido);
          
        }
      });

    } else if (filtro === 'nao-lidos') {
      this.router.navigate(['home/nao-lidos']);
      console.log('Filtrando não lidos');
      this.notificacaoFiltrada.forEach((item) => {
        if(item.lido === false){

          console.log(item.lido);
          
        }
      });
    } else if (filtro === 'todos') {
      this.router.navigate(['home/todos']);
      console.log('Filtrando todos');
      
    }
  }
}
