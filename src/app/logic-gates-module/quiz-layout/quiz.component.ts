import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class LogicGatesQuizComponent implements OnInit {
  //Correct and Wrong flags for answers
  statusC: boolean;
  statusW: boolean;
  //Keeps track of # of questions answered correctly
  countQ: number;
  constructor() {
    this.statusC = false;
    this.statusW = false;
    this.countQ = -1;
  }

  ngOnInit(): void {
  }

  //Answer is either an empty string or 'correct'
  isCorrect(answer: string) {
    //If answer is equal to 'correct'
    if (answer.length == 7) {
      //Send choice to log for troubleshooting
      console.log("correct answer choosen")
      //Indicate to user they were correct by setting flag
      this.statusC = true;
      this.statusW = false;
      //Increase count to control the ngIf statments
      this.countQ++;
    }
    else {
      //Send choice to log for troubleshooting
      console.log("wrong answer choosen")
      //Indicate to user they were wrong by setting flag
      this.statusW = true;
      this.statusC = false;
    }
  }
}
