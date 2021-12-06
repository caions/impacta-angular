import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Pergunta } from '../model/pergunta'

@Injectable({
    providedIn: 'root'
})
export class PerguntaService {
    //private URL_API = "http://localhost:8080"
    private URL_API = "https://java-quiz-api.herokuapp.com"

    constructor(private http: HttpClient) { }

    create(pergunta: Pergunta) {
        return this.http.post<Pergunta[]>(this.URL_API + '/pergunta', pergunta);
    }
    findAll() {
        return this.http.get<any>(this.URL_API + '/pergunta');
    }
    delete(id: number) {
        return this.http.delete<Pergunta[]>(this.URL_API + '/pergunta/' + id);
    }
    update(pergunta: Pergunta) {
        return this.http.put<Pergunta[]>(this.URL_API + '/pergunta/' + pergunta.id, pergunta);
    }
}