import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/model/historico';
import { Pergunta } from 'src/app/model/pergunta';
import { Pessoa } from 'src/app/model/pessoa';
import { HistoricoService } from 'src/app/service/historico.service';
import { PerguntaService } from 'src/app/service/pergunta.service';

@Component({
  selector: 'app-simulado',
  templateUrl: './simulado.component.html',
  styleUrls: ['./simulado.component.css']
})
export class SimuladoComponent implements OnInit {

  perguntas: Pergunta[] = [];
  pergunta: Pergunta = new Pergunta;
  resposta: String = ""
  historico: Historico = new Historico;


  constructor(
    private servicePergunta: PerguntaService,
    private historicoService: HistoricoService
  ) { }

  ngOnInit(): void {
    this.buscarPerguntas();
  }

  buscarPerguntas() {

    this.servicePergunta.findAll().subscribe(
      (response: Pergunta[]) => {
        this.perguntas = response;
        this.pergunta = this.perguntas[0];
        console.info(this.perguntas)
      },
      () => {
        alert("Erro!");
      }
    );

  }

  enviar() {
    this.historico = new Historico();
    this.historico.pergunta = this.pergunta;
    this.historico.pessoa = new Pessoa()
    this.historico.pessoa.id = 155;
    this.historico.resposta = this.resposta;

    this.historicoService.create(this.historico).subscribe(
      response => console.info(response)
    )

  }
}
