import { Component, OnInit } from '@angular/core';
import { gates } from './menu-gates/gates-list';
import { GatesModel } from './menu-gates/gates.model';


@Component({
  selector: 'app-primary-page',
  templateUrl: './primary-page.component.html',
  styleUrls: ['./primary-page.component.css']
})
export class PrimaryPageComponent implements OnInit {
  gates: GatesModel[] = [];

  constructor() {
    for (var x of gates) {
      this.gates.push(x);
    }
  }

  ngOnInit(): void {
  }

}
