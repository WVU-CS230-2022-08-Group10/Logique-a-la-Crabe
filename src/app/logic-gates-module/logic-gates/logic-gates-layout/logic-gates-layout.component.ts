import { Component, OnInit } from '@angular/core';
import { gate_info_card } from './gate-info-mocklist';
import { gate_info_model } from './gate-info-model';

@Component({
  selector: 'app-logic-gates-layout',
  templateUrl: './logic-gates-layout.component.html',
  styleUrls: ['./logic-gates-layout.component.css']
})
export class LogicGatesLayoutComponent implements OnInit {
  gate_info: gate_info_model[] = [];
  showPractice: boolean;
  countP: number;
  showQuiz: boolean;
  countQ: number;

  constructor() {
    //Loops threw each set in the gate-info-mocklist and feeds it to the gate-info-model array
    for (var item of gate_info_card) {
      console.log(item); //Sends data to the console for troubleshooting purposes
      this.gate_info.push(item); //Adds a mocklist set to the array model
    }
    this.showPractice = false;
    this.countP = 0;
    this.showQuiz = false;
    this.countQ = 0;
  }
  ngOnInit(): void {
  }

  //Toggles the call of the practice component when clicked
  showPracticeProblems() {
    this.showPractice = true;
    this.countP++;
    //If the user clicks the button a second time, the component is hidden
    if (this.countP > 1) {
      this.showPractice = false;
      this.countP = 0;
    }
  }
  //Toggles the call of the quiz component when clicked
  showQuizProblems() {
    this.showQuiz = true;
    this.countQ++;
    //If the user clicks the button a second time, the component is hidden
    if (this.countQ > 1) {
      this.showQuiz = false;
      this.countQ = 0;
    }
  }
}
