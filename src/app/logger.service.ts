import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

  // constructor() { }
  verificacao(texto: any) {
    console.log(texto)
  }
}
