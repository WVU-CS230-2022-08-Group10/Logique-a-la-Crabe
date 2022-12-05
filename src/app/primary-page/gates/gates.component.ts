import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { dragDrop } from './dragdrop';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css']
})
export class GatesComponent implements OnInit {
  @Input() type: string;
  @Input() pic: string;
  @Input() inputs: string;
  @Input() id: string;
  dragdrop = new dragDrop;


  constructor(private renderer2: Renderer2) {
    this.type = "missing type";
    this.pic= "missing pic";
    this.inputs = "missing number of inputs";
    this.id = "missing id"

   }

  ngOnInit(): void {
  }
} //End of class
