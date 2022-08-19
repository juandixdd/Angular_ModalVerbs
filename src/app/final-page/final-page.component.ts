import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {

  finalScore = Number(localStorage.getItem('correctAnswers'));
  finalMessage = "";

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.asignMessages();
  }

  asignMessages() {
    if (this.finalScore <= 6) {
      this.finalMessage = "Oops... try again"
    }
    else if (this.finalScore <= 9) {
      this.finalMessage = "Very well!"
    }
    else {
      this.finalMessage = "Perfect!!!!"
    }
  }

  restart() {
    localStorage.removeItem('correctAnswers');
    this._router.navigate([''])
  }

}
