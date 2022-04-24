const fs = require('fs');
const inquirer = require('inquirer');
//What is this???????
const { start } = require('repl');

//second prompt
start = () => {
    inquirer
        .prompt([
            {
             //get role
             type: 'checkbox',
             message: 'Choose a role', 
             choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        //for each response create a new object for each class.
        .then((response)=>{
            if(response === 'Manager'){
               console.log('You chose manager ')
               //start Manager prompt -> create Manager HTML card
            }
            if(response === 'Engineer'){
                console.log('You chose Engineer')
                //start Engineer prompt -> create Engineer HTML card
            }
            if(response === 'Intern'){
                console.log('You chose Intern')
                //start Intern prompt -> create Intern HTML card
            }
        })
    }   

//first prompt
begin = () =>{
inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Would you like to make a team?',
            name: 'name'
        }
    ])
    .then((response)=>{
        if(response){
            start();
        }
    })
}   
begin();
