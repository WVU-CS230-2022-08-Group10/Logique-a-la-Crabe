import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gate-info-card',
  templateUrl: './gate-info-card.component.html',
  styleUrls: ['./gate-info-card.component.css']
})
export class GateInfoCardComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() text: string;
  @Input() table: string;
  showTable: boolean;

  sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  constructor() {
    this.img = "";
    this.title = "";
    this.text = "";
    this.table = "";
    this.showTable = false;
  }

  showTables() {
    this.showTable = true;
  }


  ngOnInit(): void {
  }

}
