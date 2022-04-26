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
    // console.log(teamM[0]) //manager object
    // console.log(teamM[0].name) //name
    // console.log(teamI[0].name)
    // console.log(teamE[0].name)

    var cardSkeletonM =
    `
    <div class= "col-sm">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Manager
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${teamM[0].name}  </li>
        <li class="list-group-item">${teamM[0].id} </li>
        <li class="list-group-item">${teamM[0].email}  </li>
        <li class="list-group-item">${teamM[0].officeNumber} </li>
      </ul>
    </div>
    </div>
    
    `
    for(var i = 0; i<teamI.length; i++){
        var cardSkeletonI = 
        `
<div class= "col-sm">
<div class="card" style="width: 18rem;">
<div class="card-header">
    Intern
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${teamI[i].name}  </li>
    <li class="list-group-item">${teamI[i].id} </li>
    <li class="list-group-item">${teamI[i].email}  </li>
    <li class="list-group-item">${teamI[i].school} </li>
    
</ul>
</div> 
</div>
        `
    }
    for(var i = 0; i<teamE.length; i++){
        var cardSkeletonE = 
        `
<div class= "col-sm">
<div class="card" style="width: 18rem;">
<div class="card-header">
    Engineer
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${teamE[i].name}  </li>
    <li class="list-group-item">${teamE[i].id} </li>
    <li class="list-group-item">${teamE[i].email}  </li>
    <li class="list-group-item"><a href="https://github.com/${teamE[i].github}">${teamE[i].github}</a></li>
</ul>
</div> 
</div>     
        `
    }
    var HTMLSkeleton = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Manager</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

</head>
<body>
<header>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Team Manager</h1>
    <p class="lead">See your team below!</p>
  </div>
</div></header>
<main class = "container-fluid">
<div class = "row align-items-start">
${cardSkeletonM}
${cardSkeletonE}
${cardSkeletonI}
</div>
</main> 


  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="/index.js"></script>
</body>
</html>
    `

    fs.writeFile('index.html', HTMLSkeleton ,(err) =>
    err ? console.error(err) : console.log('card added!'))
    
    
}