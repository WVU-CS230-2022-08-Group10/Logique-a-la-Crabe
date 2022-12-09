
export class GatesModel{
    type: string;
    svg: String;
    inputs: string;
    id: string;
    viewbox: string;
  
  
    constructor(type: string,svg: String, inputs: string, id: string, viewbox: string){
      this.type = type;
      this.svg = svg;
      this.inputs = inputs;
      this.id = id;
      this.viewbox = viewbox;
  }
  }