import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Produto } from './product'

@Injectable()
export class ProductService {

  constructor(private loggerService:LoggerService) {
    this.loggerService.verificacao('ProductService foi construido!')
  }

  // criando o conteudo que será oferecido pelo service
  public getProdutos() {
    this.loggerService.verificacao('metodo/funcao getProdutos foi chamada!')
    let produtos: Produto[];

    produtos = [
      new Produto(1, "Quadro Mestre Yoda", 199),
      new Produto(2, "Máscara Darth Vader", 159),
      new Produto(3, "Lightsaber", 89)
    ]
    this.loggerService.verificacao(produtos)
    return produtos;
  }
}