const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github, getGithub, getRole){
        this.github = github;
        this.getGithub = function () {
            //append username to github or use axios to use api
        }
        this.getRole = function () {

        }
    }
    
}