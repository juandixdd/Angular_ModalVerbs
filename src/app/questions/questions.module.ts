import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { RouterModule } from '@angular/router';
import { Question3Component } from './question3/question3.component';



@NgModule({
  declarations: [
    Question1Component,
    Question2Component,
    Question3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Question1Component
  ]
})
export class QuestionsModule { }
