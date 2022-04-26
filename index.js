const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const teamM = [];
const teamI = [];
const teamE = [];

// second prompt
function startPrompt() {
    inquirer
        .prompt([
            {
             //get role
             type: 'list',
             message: 'Choose a role', 
             choices: ['Engineer', 'Intern', 'exit'],
             name: 'addTeam'
            }
            
        ])
        //for each response create a new object for each class.
        .then((response)=>{
            console.log(response.addTeam)
            if(response.addTeam === 'Engineer'){
                console.log('You chose Engineer')
                startEngineer();
            }
            if(response.addTeam === 'Intern'){
                console.log('You chose Intern')
                startIntern();
            }
            if(response.addTeam === 'exit'){
                renderHTML();
            }
        })
    }
    
 function startEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your engineer\'s name?',
                name: 'engineer'
            },
            {
                type: 'input',
                message: 'What is your id',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your github',
                name: 'github'
            }

        ])
        .then((response)=>{
            const engineer = new Engineer(response.engineer, response.id,response.email,response.github)
            teamE.push(engineer)
            startPrompt();
        })
 }

 function startIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your intern\'s name?',
                name: 'intern'
            },
            {
                type: 'input',
                message: 'What is your id',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email',
                name: 'email'
            },
            {
                type:'input',
                message: 'Where do you go to school?',
                name: 'school'

            }

        ])
        .then((response)=>{
            const intern = new Intern(response.intern, response.id, response.email, response.school)
            teamI.push(intern)
            startPrompt();
        })
 }



//first prompt.. add manager
begin = () =>{
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your managers name?',
            name: 'manager'
        },
        {
            type: 'input',
            message: 'What is your id',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your office number',
            name: 'officeNumber'
        }
    ])
    .then((response)=>{
        const manager = new Manager(response.manager, response.id, response.email, response.officeNumber)
        teamM.push(manager);
            startPrompt();   
    })
}   
begin();

function renderHTML(){
    console.log(teamM[0].name) //name
    console.log(teamI[0].name)
    console.log(teamE[0].name)
//fs.writeFile('index.html',htmlSkeleton,(err) =>
           // err ? console.error(err) : console.log('index.html created!'))
}