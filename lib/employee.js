//not to sure what I want to do with this class
class Employee {
    constructor(name, id, email, getName, getId, getEmail, getRole){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = function() {
            //get Name
        }
        this.getId = function() {
            //get Id
        }
        this.getRole = function() {
            //getRole
        }
    }
}

module.exports = Employee;
