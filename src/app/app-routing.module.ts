import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricComponent } from './components/historic/historic.component';
import { PersonComponent } from './components/person/person.component';
import { QuestionComponent } from './components/question/question.component';
import { SimuladoComponent } from './components/simulado/simulado.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'questions', component: QuestionComponent },
  { path: 'persons', component: PersonComponent },
  { path: 'simulado', component: SimuladoComponent },
  { path: 'historico', component: HistoricComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
