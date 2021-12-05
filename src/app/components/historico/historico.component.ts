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

  displayedColumns: string[] = ['id', 'pessoa', 'resposta', 'resposta-correta'];
  dataSource: any;
  historico: Historico = new Historico();
  rotasAdmin = false;

  constructor(private service: HistoricoService) { }

  ngOnInit(): void {
    this.findAll();

  }

  findAll() {
    this.service.findAll().subscribe(
      (response) => {
        // alert('sucesso!')
        this.dataSource = new MatTableDataSource<Historico>(response);
      }, (reponse) => {
        // alert("Erro!")
      }
    );
  }

}
