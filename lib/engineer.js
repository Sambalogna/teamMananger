const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        //append username to github or use axios to use api
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
    
}

module.exports = Engineer;