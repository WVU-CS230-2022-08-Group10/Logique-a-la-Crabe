import { Component, Input, OnInit } from '@angular/core';
import { dragDrop } from './dragdrop';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css']
})
export class GatesComponent implements OnInit {
  @Input() type: string;
  @Input() svg: String;
  @Input() inputs: string;
  @Input() id: string;
  @Input() viewbox: string;
  dragdrop = new dragDrop;


  constructor() {
    this.type = "missing type";
    this.svg = "missing svg path";
    this.inputs = "missing number of inputs";
    this.id = "missing id"
    this.viewbox ="0 0 0 0"
   }

  ngOnInit(): void {
  }


} //End of class
