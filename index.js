const fs = require('fs');
const inquirer = require('inquirer');
const team = [];

//second prompt
// function startPrompt() {
//     inquirer
//         .prompt([
//             {
//              //get role
//              type: 'checkbox',
//              message: 'Choose a role', 
//              choices: ['Engineer', 'Intern', //'exit']
//             }
//         ])
//         //for each response create a new object for each class.
//         .then((response)=>{
//             if(response === 'Manager'){
//                console.log('You chose manager ')
//                //start Manager prompt -> create Manager HTML card
//             }
//             if(response === 'Engineer'){
//                 console.log('You chose Engineer')
//                 //start Engineer prompt -> create Engineer HTML card
//             }
//             if(response === 'Intern'){
//                 console.log('You chose Intern')
//                 //start Intern prompt -> create Intern HTML card
//             }
//         })
//     }   

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
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        team.push(manager);
            //create a start counter to increment employee when creating new employee object?
            startPrompt();
            console.log(response)
    })
}   
begin();
