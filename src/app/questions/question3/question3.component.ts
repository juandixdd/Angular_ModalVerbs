import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component implements OnInit {


  correctAnswer = "Must"

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
      this._router.navigate(['/final'])
      
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
      this._router.navigate(['/final'])
    }
  }

}
