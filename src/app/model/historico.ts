import { Pergunta } from './pergunta'
import { Pessoa } from './pessoa'

export class Historico {
    id!: number;
    pessoa!: Pessoa;
    pergunta!: Pergunta;
    resposta!: String;
}