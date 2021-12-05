import { Component } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { PersonService } from '../../service/pessoa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titulo: string = "Bem vindo ao Quiz App!!"
  pessoa: Pessoa = new Pessoa();

  constructor(private service: PersonService) {

  }

  cadastrar(id: number) {
    this.service.create(this.pessoa).subscribe()
  }

}
