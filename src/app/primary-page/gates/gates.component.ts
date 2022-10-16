import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css']
})
export class GatesComponent implements OnInit {
  @Input() type: string;
  @Input() pic: string;
  @Input() inputs: string;


  constructor() {
    this.type = "missing type";
    this.pic= "missing pic";
    this.inputs = "missing number of inputs";
   }

  ngOnInit(): void {
  }

}
