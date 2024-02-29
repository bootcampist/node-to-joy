// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Import Employee Class
const Employee = require('./Employee.js');

// Create Intern Class from the Employee One
class Intern extends Employee {
    // Set the Manager details to the user's input or a default alternative;
    constructor(name, id, email, school, photo){
        super(name, id, email, photo);
        this.school = school || 'N/A';
        this.role = 'Intern';
    }
    
    // Function to return the school name
    getSchool () {
        return this.school;
    }
}

// Export the Intern Class
module.exports = Intern;