// This component is where all of the logic gates are placed, given a position,
// and connected together

public class canvas {
    boolean loggedIn;
    String userInput = "word";
    Object gate;
    int gateCount;
    {
        if (userInput.equalsIgnoreCase("open")) {
            // Open saved circuit method call
        } else if (userInput.equalsIgnoreCase("close")) {
            // Close current circuit method call
        } else if (userInput.equalsIgnoreCase("new")) {
            // New circuit method call
        } else {
            // Indicate to user their input was not understood
        }
    }

    public void openSavedCircuit() {
        if (loggedIn) {
            // Prompt user to select a current
            // Retrive the circuit from the account backend
            // Add the circuit to the canvas backend and have it show up on the canvas
        } else {
            // Prompt user to log in or create an account
        }
    }

    public void closeCurrentCircuit() {
        while (gateCount > 0) {
            // Delete gate off of the canvas
        }
    }

    public void createNewCircuit() {
        // Grab location of placed circuit

    }

}
