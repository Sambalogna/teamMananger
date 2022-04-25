//not to sure what I want to do with this class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //functions
    getName() {
        //get Name
        return this.name
    }
    getId() {
        //get Id
        return this.id
    }
    getRole(){
        //getRole
        return 'Employee'
    }
    getEmail() {
        //get email
        return this.email
    }
}

module.exports = Employee;
