// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name || 'nodeify employee';
        // Employee.lastID++;
        this.id = id || Employee.lastId;
        this.email = email || 'info@nodeify.com';
        Employee.lastId++;
    }

    getName (){
        return this.name;
    }
    getId (){
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole(){
        return this.role ||'Employee';
    }
    
}

Employee.lastId = 1;

module.exports = Employee;