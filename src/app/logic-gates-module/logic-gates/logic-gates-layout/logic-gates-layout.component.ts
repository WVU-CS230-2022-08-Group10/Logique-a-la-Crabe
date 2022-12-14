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
  count: number;

  constructor() {
    for (var item of gate_info_card) {
      console.log(item);
      this.gate_info.push(item);
    }
    this.showPractice = false;
    this.count = 0;
  }
  ngOnInit(): void {
  }

  showPracticeProblems() {
    this.showPractice = true;
    this.count++;
    if (this.count > 1) {
      this.showPractice = false;
      this.count = 0;
    }

  }

}
