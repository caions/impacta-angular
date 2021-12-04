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

  sorteiaPergunta(response: Pergunta[]) {
    this.perguntas = response
    let randomNumber = Math.floor(Math.random() * response.length)
    this.pergunta = this.perguntas[randomNumber];
    //remove a pergunta selecionada do array e adiciona a um novo array de perguntas
    this.perguntas.splice(this.perguntas.indexOf(this.perguntas[randomNumber]), 1)
  }

  buscarPerguntas() {
    this.servicePergunta.findAll().subscribe(
      (response: Pergunta[]) => {
        //sorteia a pergunta ao renderizar o componente
        this.sorteiaPergunta(response)
      },
      () => {
      //  alert("Erro!");
      }
    );
  }


  enviar() {
    this.historico = new Historico();
    this.historico.pessoa = new Pessoa()
    this.historico.pessoa.id = 214;
    this.historico.pergunta = this.pergunta;
    this.historico.resposta = this.resposta;

    this.historicoService.create(this.historico).subscribe()

    this.sorteiaPergunta(this.perguntas)
  }

}
