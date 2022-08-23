import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponent } from './final-page/final-page.component';

import { PrincipalPageComponent } from './principal-page/principal-page.component';

import { Question1Component } from './questions/question1/question1.component';
import { Question10Component } from './questions/question10/question10.component';
import { Question2Component } from './questions/question2/question2.component';
import { Question3Component } from './questions/question3/question3.component';
import { Question4Component } from './questions/question4/question4.component';
import { Question5Component } from './questions/question5/question5.component';
import { Question6Component } from './questions/question6/question6.component';
import { Question7Component } from './questions/question7/question7.component';
import { Question8Component } from './questions/question8/question8.component';
import { Question9Component } from './questions/question9/question9.component';

const routes: Routes = [
  { path: '', component: PrincipalPageComponent },
  { path: 'final', component: FinalPageComponent },
  { path: 'q1', component: Question1Component },
  { path: 'q2', component: Question2Component },
  { path: 'q3', component: Question3Component },
  { path: 'q4', component: Question4Component },
  { path: 'q5', component: Question5Component },
  { path: 'q6', component: Question6Component },
  { path: 'q7', component: Question7Component },
  { path: 'q8', component: Question8Component },
  { path: 'q9', component: Question9Component },
  { path: 'q10', component: Question10Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
