export class dragDrop {

    width = window.screen.width / 4;
    gate!: HTMLElement;
    originalGateCoords!: number[];
    canvas = document.getElementById("canvas");
    move = (event: MouseEvent) => this.moveAt(event.pageX, event.pageY, this.gate)
    drophere = (event: MouseEvent) => this.drop();

    // Used for the remove animation
    sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    // Method for starting the drag
    public drag(dragEvent: MouseEvent, id: string) {
        console.log("dragging");
        // Gets the element to drag
        var gateToMove = document.getElementById(id);
        // Clones the element so that the original stays in place
        this.gate = gateToMove?.cloneNode(true) as HTMLElement;

        this.originalGateCoords = [this.gate.getBoundingClientRect().left, this.gate.getBoundingClientRect().top];

        this.gate.style.position = 'absolute';
        this.gate.style.zIndex = "10000";

        document.body.append(this.gate);

        // puts the gate under the pointer
        this.moveAt(dragEvent.pageX, dragEvent.pageY, this.gate);
        // Adds an event listener so that the gate will follow the mouse
        document.addEventListener('mousemove', this.move);

        // Adds an event listener to drop the gate in place when the mouse is clicked
        document.addEventListener('click', this.drophere);

    };// End of drag method


    // Method to drop the gate in place
    drop() {
        var gateCoords = [this.gate.getBoundingClientRect().x, this.gate.getBoundingClientRect().y];
        if (this.canvas != null)
            var canvasCoords = [this.width, this.canvas.getBoundingClientRect().y];
        else canvasCoords = [0, 0];

        // Checks the location of the gate to make sure that it's placed only on the canvas
        if (this.canvas != null)
            if (gateCoords[0] > canvasCoords[0] &&
                (gateCoords[0] + this.gate.offsetWidth) < (canvasCoords[0] + this.canvas.offsetWidth) &&
                gateCoords[1] > canvasCoords[1] &&
                (this.gate.offsetHeight + gateCoords[1]) < (canvasCoords[1] + this.canvas.offsetHeight)) {
                document.removeEventListener('mousemove', this.move);
                document.removeEventListener('click', this.drophere);
                this.gate.onmouseup = null;
            }

            else {
                document.removeEventListener('mousemove', this.move);
                document.removeEventListener('click', this.drophere);
                this.removeAnim();
                this.gate.onmouseup = null;
            }
    }

    // Moves the gate to a the position under the pointer3
    public moveAt(pageX: number, pageY: number, gate: HTMLElement) {
        if (gate != null) {
            var left = pageX - gate.offsetWidth / 2;
            var top = pageY - gate.offsetHeight / 2;
            gate.style.left = left + 'px';
            gate.style.top = top + 'px';
        }
    }

    // Animates the gate moving back to the list
    private async removeAnim() {
        var gateCoords = [this.gate.getBoundingClientRect().x, this.gate.getBoundingClientRect().y];
        while (gateCoords[0] > 100) {
            this.gate.style.left = gateCoords[0] - 25 + "px";
            await this.sleep(0.5);
            gateCoords = [this.gate.getBoundingClientRect().x, this.gate.getBoundingClientRect().y];
        }
        this.gate.remove();
    }
}