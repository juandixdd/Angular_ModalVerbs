import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.scss']
})
export class Question5Component implements OnInit {

  correctAnswer = "Past Simple"

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  validateRes($event: any) {
    let answer = $event.target.textContent;

    if (answer == this.correctAnswer) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Correct!',
        showConfirmButton: false,
        timer: 1000
      })
      this._router.navigate(['/q6'])
      
      let correctAnswers = Number(localStorage.getItem("correctAnswers"));
      let newPoints = correctAnswers+1;
      localStorage.setItem("correctAnswers", newPoints.toString())


    }
    else {
      console.log("Invalid");
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops!',
        showConfirmButton: false,
        timer: 1000
      })
      this._router.navigate(['/q6'])
    }
  }

}
