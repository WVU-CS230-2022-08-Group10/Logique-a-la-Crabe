import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gate-info-card',
  templateUrl: './gate-info-card.component.html',
  styleUrls: ['./gate-info-card.component.css']
})
export class GateInfoCardComponent implements OnInit {
  @Input () img: string;
  @Input () title: string;
  @Input () text: string;

  constructor() { 
    this.img = "";
    this.title = "";
    this.text = "";
  }


  ngOnInit(): void {
  }

}
