import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Pergunta } from './model/pergunta';
import { Pessoa } from './model/pessoa';
import { PessoaService } from './pessoa.service';
import { PerguntaService } from './pergunta.service'

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting = 'QUIZ APP';
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource: any;
  mostrarFormulario = false;
  pessoa: Pessoa = new Pessoa();

  constructor(private service: PessoaService, private servicePergunta: PerguntaService) {

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