import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Pessoa } from '../../model/pessoa';
import { PersonService } from '../../service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PersonComponent  {

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource: any;
  mostrarFormulario = false;
  pessoa: Pessoa = new Pessoa();

  constructor(private service: PersonService) {

  }

  ngOnInit(): void {
    this.findAll();

  }

  findAll() {
    this.service.findAll().subscribe(
      (response) => {
        //  alert('sucesso!')
        this.dataSource = new MatTableDataSource<Pessoa>(response);
      }, (reponse) => {
        //    alert("Erro!")
      }
    );
  }


  delete(id: number) {
    this.service.delete(id).subscribe(
      (response) => {
        //  alert('sucesso!')
        this.findAll();
        this.dataSource = new MatTableDataSource<Pessoa>(response);
      }, (reponse) => {
        //     alert("Erro!")
      }
    );
  }

  update(pessoa: Pessoa) {
    this.service.update(pessoa).subscribe(
      (response) => {
        alert('sucesso!')
        this.findAll();
        this.dataSource = new MatTableDataSource<Pessoa>(response);
      }, (reponse) => {
        alert("Erro!")
      }
    );
  }

  editar(element: Pessoa) {
    this.mostrarFormulario = true;
    this.pessoa = element;
  }

  atualizarNoBanco(id: number) {
    this.service.update(this.pessoa).subscribe(
      (response) => {
        this.findAll()
        this.mostrarFormulario = false;
      }, () => {
        alert("erro")
      })
  }

  criarNoBanco() {
    this.service.create(this.pessoa).subscribe(
      (response) => {
        this.findAll()
        this.mostrarFormulario = false;
      }, () => {
        alert("erro")
      })
  }

  salvar(id: number) {
    if (this.pessoa.id) {
      this.atualizarNoBanco(id)
    } else {
      this.criarNoBanco()
    }
  }

  novaPessoa() {
    this.mostrarFormulario = true;
    this.pessoa = new Pessoa()
  }

}
