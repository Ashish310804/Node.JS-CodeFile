//A GUI application interface for the user to interact with the application
//This interface will be used to display the results of the application and allow the user to interact with it
class GUI_Interface {
    constructor() {
        this.app = null; //The application that the interface will interact with
        this.results = null; //The results of the application that will be displayed on the interface
    }

    //Method to set the application that the interface will interact with
    setApplication(app) {
        this.app = app;
    }

    //Method to set the results of the application that will be displayed on the interface
    setResults(results) {
        this.results = results;
    }   

    //Method to display the results on the interface
    displayResults() {
        if (this.results) {
            console.log("Results: ", this.results); 
        } else {
            console.log("No results to display.");
        }
    }

    //Method to allow the user to interact with the application
    interact() {
        if (this.app) {
            console.log("Interacting with the application...");
            this.app.run(); //Assuming the application has a run method to execute its functionality
        } else {
            console.log("No application to interact with.");
        }
    }
}

