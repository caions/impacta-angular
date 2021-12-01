import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historico } from '../model/historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
    private URL_API = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  create(historico: Historico) {
    return this.http.post<Historico[]>(this.URL_API + '/historico', historico);
  }
  findAll() {
    return this.http.get<any>(this.URL_API + '/historico');
  }
  delete(id: number) {
    return this.http.delete<Historico[]>(this.URL_API + '/historico/' + id);
  }
  update(historico: Historico) {
    return this.http.put<Historico[]>(this.URL_API + '/historico/' + historico.id, historico);
  }
}