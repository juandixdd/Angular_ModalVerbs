import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponent } from './final-page/final-page.component';

import { PrincipalPageComponent } from './principal-page/principal-page.component';

import { Question1Component } from './questions/question1/question1.component';
import { Question2Component } from './questions/question2/question2.component';
import { Question3Component } from './questions/question3/question3.component';

const routes: Routes = [
  { path: '', component: PrincipalPageComponent },
  { path: 'final', component: FinalPageComponent },
  { path: 'q1', component: Question1Component },
  { path: 'q2', component: Question2Component },
  { path: 'q3', component: Question3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
