import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricComponent } from './components/historico/historico.component';
import { PersonComponent } from './components/pessoa/pessoa.component';
import { QuestionComponent } from './components/pergunta/pergunta.component';
import { SimuladoComponent } from './components/simulado/simulado.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin/perguntas', component: QuestionComponent },
  { path: 'admin/pessoas', component: PersonComponent },
  { path: 'user/simulado', component: SimuladoComponent },
  { path: 'user/historico', component: HistoricComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
