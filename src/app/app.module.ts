import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './components/question/question.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [ LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
