export class gate_info_model {
    gate_image: string;
    gate_name: string;
    gate_description: string;

    constructor(gate_image: string, gate_name: string, gate_description: string) {
        this.gate_image = gate_image;
        this.gate_name = gate_name;
        this.gate_description = gate_description;
    }
}