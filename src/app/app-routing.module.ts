import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { QuestionComponent } from './components/question/question.component';
import { SimuladoComponent } from './components/simulado/simulado.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'questions', component: QuestionComponent },
  { path: 'persons', component: PersonComponent },
  { path: 'simulado', component: SimuladoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
