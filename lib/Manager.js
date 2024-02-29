// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Import Employee class
const Employee = require('./Employee.js');

// Create Manager class from the Employee one
class Manager extends Employee {
    // Set the Manager details to the user's input or a default alternative;
    constructor(name, id, email, officeNumber, photo){
        super(name, id, email,photo); 
        this.officeNumber = officeNumber || 'N/A';
        this.role = 'Manager';
    }
    // Function to return the office number
    getOfficeNumber () {
        return this.officeNumber;
    }  
}

// Export the Class
module.exports = Manager;
