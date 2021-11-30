import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pergunta } from 'src/app/model/pergunta';
import { PerguntaService } from 'src/app/service/pergunta.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  displayedColumnsPergunta: string[] = ['id', 'pergunta', 'resposta1','resposta2','resposta3','respostaCorreta','acoes'];
  dataSource: any;
  mostrarFormulario = false;
  pergunta: Pergunta = new Pergunta();

  constructor(private servicePergunta: PerguntaService) {

  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.servicePergunta.findAll().subscribe( 
      (response) => {
        this.dataSource = new MatTableDataSource<Pergunta>(response);
      },
      (response) => {
        alert("Erro!");
      }
    );
  }

  delete(id: number) {
    this.servicePergunta.delete(id).subscribe(
      (response) => {
        //  alert('sucesso!')
        this.findAll();
        this.dataSource = new MatTableDataSource<Pergunta>(response);
      }, (reponse) => {
        //     alert("Erro!")
      }
    );
  }

  update(pergunta: Pergunta) {
    this.servicePergunta.update(pergunta).subscribe(
      (response) => {
        alert('sucesso!')
        this.findAll();
        this.dataSource = new MatTableDataSource<Pergunta>(response);
      }, (reponse) => {
        alert("Erro!")
      }
    );
  }

  editar(element: Pergunta) {
    this.mostrarFormulario = true;
    this.pergunta = element;
  }

  atualizarNoBanco(id: number) {
    this.servicePergunta.update(this.pergunta).subscribe(
      (response) => {
        this.findAll()
        this.mostrarFormulario = false;
      }, () => {
        alert("erro")
      })
  }

  criarNoBanco() {
    this.servicePergunta.create(this.pergunta).subscribe(
      (response) => {
        this.findAll()
        this.mostrarFormulario = false;
      }, () => {
        alert("erro")
      })
  }

  salvar(id: number) {
    if (this.pergunta.id) {
      this.atualizarNoBanco(id)
    } else {
      this.criarNoBanco()
    }
  }

  novaPergunta() {
    this.mostrarFormulario = true;
    this.pergunta = new Pergunta()
  }

}
