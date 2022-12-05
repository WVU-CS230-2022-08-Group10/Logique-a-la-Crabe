import { Component, OnInit } from '@angular/core';
import { gates } from './gates/gates-list';
import { GatesModel } from './gates/gates.model';


@Component({
  selector: 'app-primary-page',
  templateUrl: './primary-page.component.html',
  styleUrls: ['./primary-page.component.css']
})
export class PrimaryPageComponent implements OnInit {
  gates: GatesModel[] = [];

  constructor() {
    for(var x of gates){
      this.gates.push(x);
    }
  }

  ngOnInit(): void {
    this.setCanvas();
  }

  public setCanvas(){
    var width = window.screen.width / 4;
    var canvas = document.getElementById("canvas");
    if(canvas != null) canvas.style.left = width + 'px';
  }


}
