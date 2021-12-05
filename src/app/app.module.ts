import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './components/pergunta/pergunta.component';
import { PersonComponent } from './components/pessoa/pessoa.component';
import { SimuladoComponent } from './components/simulado/simulado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoricComponent } from './components/historico/historico.component'
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    PersonComponent,
    SimuladoComponent,
    HistoricComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
