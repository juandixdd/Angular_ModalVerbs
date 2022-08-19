import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsModule } from './questions/questions.module';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { RouterModule } from '@angular/router';
import { FinalPageComponent } from './final-page/final-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,
    FinalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
