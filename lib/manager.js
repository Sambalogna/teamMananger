const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber, getRole){
        this.officeNumber = officeNumber;
        this.getRole = function() {
            
        }
    }
}