import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/model/historico';
import { Pergunta } from 'src/app/model/pergunta';
import { Pessoa } from 'src/app/model/pessoa';
import { HistoricoService } from 'src/app/service/historico.service';
import { PerguntaService } from 'src/app/service/pergunta.service';
import { PersonService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-simulado',
  templateUrl: './simulado.component.html',
  styleUrls: ['./simulado.component.css']
})
export class SimuladoComponent implements OnInit {

  perguntas: Pergunta[] = [];
  pergunta: Pergunta = new Pergunta;
  quantidadeDePerguntas: number = 0
  resposta: String = ""
  respostasCorretas: number = 0
  historico: Historico = new Historico;
  pessoa: Pessoa = new Pessoa
  exibirResultado: boolean = false;


  constructor(
    private servicePergunta: PerguntaService,
    private historicoService: HistoricoService,
    private pessoaService: PersonService
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
    // Adiciona a ultima pessoa criada para o atributo pessoa
    this.pessoaService.findAll().subscribe((response) => {
      this.pessoa = response[response.length - 1]
    })
    this.servicePergunta.findAll().subscribe(
      (response: Pergunta[]) => {
        this.quantidadeDePerguntas = response.length
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
    this.historico.pessoa.id = this.pessoa.id;
    this.historico.pergunta = this.pergunta;
    this.historico.resposta = this.resposta;

    // adiciona +1 no atributo para cada resposta correta
    if (this.resposta === this.pergunta.respostaCorreta) {
      this.respostasCorretas += 1
    }
    this.historicoService.create(this.historico).subscribe()

    // se não houver mais perguntas, exibe o resultado
    if (this.perguntas.length !== 0) {
      this.sorteiaPergunta(this.perguntas)
    } else {
      this.exibirResultado = true
    }



  }

}
