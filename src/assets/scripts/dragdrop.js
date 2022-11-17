// This script is supposed to be applied to every image of a gate in order to make it draggable onto the canvas


var width = window.screen.width / 4;

// Sets the size of the canvas and saves the area for later use
function setCanvas() {
    canvas = document.getElementById("canvas");
    canvas.style.left = width + 'px';
    gate = document.getElementById("gate");
    gateCoords = [gate.getBoundingClientRect().x, gate.getBoundingClientRect().y];
    originalgateCoords = [gate.getBoundingClientRect().x, gate.getBoundingClientRect().y];
    canvasCoords = [width, canvas.getBoundingClientRect().y];
    counter = 0;
}

// Adds an event listener so that the gate can be dragged when it is clicked on
function setDrag() {
    gateToMove = document.getElementById("gate");
    gateToMove.setAttribute('draggable', false);
    
    gateToMove.addEventListener('mousedown', drag);
}

//  start the process of dragging
function drag(event) {
    gate = gateToMove.cloneNode();
    gateToMove.removeEventListener('click', drag)

    // None of these stop the default browser dragging, causes the image to require a double click
    // gate.draggable = false;
    // gate.addEventListener('dragstart', ev => {}, false)
    // gate.ondragstart = function() { return false; };
    // gate.setAttribute('draggable', false);

    gate.style.position = 'absolute';
    gate.style.zIndex = 1000;

    document.body.append(gate);
    // puts the gate under the pointer
    moveAt(event.pageX, event.pageY);

    // Adds an event listener so that the gate will follow the mouse
    document.addEventListener('mousemove', onMouseMove);

    // Drops the gate in place when the mouse is clicked
    document.onclick = function () {
        drop();
    };
};

// Checks the location of the gate, drops it in place if it's above the canvas
// Otherwise, it deletes the gate off of the screen
function drop() {
    if (gateCoords[0] > canvasCoords[0] &&
        (gateCoords[0] + gate.offsetWidth) < (canvasCoords[0] + canvas.offsetWidth) &&
        gateCoords[1] > canvasCoords[1] &&
        (gate.offsetHeight + gateCoords[1]) < (canvasCoords[1] + canvas.offsetHeight)) {
        document.removeEventListener('mousemove', onMouseMove);
        gate.onmouseup = null;
    }
    else {
        gateCoords = [originalgateCoords[0], originalgateCoords[1]];
        document.removeEventListener('mousemove', onMouseMove);
        gate.onmouseup = null;
        gate.remove();
    }
}

// Shortens some lines
function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
}

// Moves the gate to a the position under the pointer3
function moveAt(pageX, pageY) {
    var left = pageX - gate.offsetWidth / 2;
    var top = pageY - gate.offsetHeight / 2;
    gate.style.left = left + 'px';
    gate.style.top = top + 'px';
    gateCoords = [left, top];
}