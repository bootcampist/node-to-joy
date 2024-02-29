// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Import Employee Class
const Employee = require('./Employee.js');

// Create Engineer Class from the Employee One
class Engineer extends Employee {
    // Set the Manager details to the user's input or a default alternative;
    constructor(name, id, email, github, photo){
        super(name, id, email, photo);
        this.role = 'Engineer';
        this.github = github || 'N/A';   
    }

    // Function to return the Github name
    getGithub () {
        return this.github;
    }
}

// Export the Engineer Class
module.exports = Engineer;