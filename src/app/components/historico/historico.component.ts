import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Historico } from 'src/app/model/historico';
import { HistoricoService } from 'src/app/service/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricComponent implements OnInit {

  displayedColumns: string[] = ['pessoa', 'pergunta', 'math-resposta'];
  dataSource: any;
  historico: Historico = new Historico();
  rotasAdmin = false;
  mathResposta: boolean[] = [];

  constructor(private service: HistoricoService) { }

  ngOnInit(): void {
    this.findAll();

  }

  acertaResposta(resp: Historico) {
    let { resposta, pergunta } = resp
    return pergunta.respostaCorreta == resposta
  }

  findAll() {
    this.service.findAll().subscribe(
      (response) => {
        // ordena o array em ordem descrescente
        response.sort((b: Historico, a: Historico) => {
          return a.id - b.id;
        });
        // adiciona na chave resposta o resultado da funcao acerta resposta
        response.map((resp: any) => resp.resposta = this.acertaResposta(resp))
        this.dataSource = new MatTableDataSource<Historico>(response);
      }, (reponse) => {
        // alert("Erro!")
      }
    );
  }

}
