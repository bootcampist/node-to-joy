// TODO: Write code to define and export the Employee class
class Employee {
    // Set the employee details to the user's input or a default alternative;
    constructor(name, id, email,photo){
        this.name = name || 'Employee';
        this.id = id || Employee.lastId;
        this.email = email || 'N/A';
        this.photo = photo || 'placeholder.webp';
        Employee.lastId++;
    }

    // Functions to return the employee's details
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole () {
        return this.role ||'Employee';
    }
    getPhoto () {
        return this.photo;
    }
    
}

// Set the initial ID number for the default alternative
Employee.lastId = 1;

// Export the Class
module.exports = Employee;