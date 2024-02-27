const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Global Variables
let teamMember = 'you';
const startMessage = 'This section is to be filled in by the Team Manager.'
let questions = [
                        {
                            type: 'input',
                            name: 'name',
                            message: `Name:`
                        },
                        {
                            type: 'input',
                            name: 'employeeID',
                            message: `Employee ID Number:`
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: `E-mail Address:`
                        },
                        {
                            type: 'input',
                            name: 'officeNum',
                            message: `Office Number:`
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: `GitHub Username:`
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: `School Name:`
                        }
]

const managerQuestions = [questions[0], questions[1], questions[2], questions[3]];
const engineerQuestions = [questions[0], questions[1], questions[2], questions[4]];
const internQuestions = [questions[0], questions[1], questions[2], questions[5]];

let managerAnswers=[];
let teamManager;
let engineerArray =[];
let internArray = [];
const menuOptions = [ 
                        {
                            type: 'list',
                            name: 'menuOption',
                            message: 'Select an option:',
                            choices: ['Add an engineer', 'Add an intern','Finish building the team']
                        }

]
let addMessage = `Enter the details of ${teamMember}.`
const allEmployees =[];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
function initialise () {
    console.log(startMessage);
    inquirer
    .prompt(managerQuestions)
    .then((answers)=>{
        managerAnswers.push(answers);
        const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNum);
        allEmployees.push(manager);
        teamManager = answers.name;
        menu();
    });
}

function menu () {
    const menuMessage = `Welcome, ${teamManager || 'Team Manager'}!`;
    console.log(menuMessage);
    inquirer
    .prompt(menuOptions)
    .then((options)=>{
        if (options.menuOption === 'Add an engineer'){
            addEngineer();
        } else if(options.menuOption === 'Add an intern'){
            addIntern();
        } else {
            allEmployees.push(...engineerArray, ...internArray);
            console.log('You have finished building your team.')
            console.log('The HTML file will be generated shortly.')
            console.log('Exiting the application.');
            generateFile();
        };
    })
}

function addEngineer (){
    teamMember = 'the engineer';
    addMessage = `Enter the details of ${teamMember}.`

    console.log(addMessage);
    inquirer
    .prompt(engineerQuestions)
    .then((enAnswers)=>{
        const engineer = new Engineer(enAnswers.name, enAnswers.employeeID, enAnswers.email, enAnswers.github);
        engineerArray.push(engineer);
        console.log(`Added ${enAnswers.name}!`);
        console.log(engineerArray);
        menu();
    })
}

function addIntern (){
    teamMember = 'the intern';
    addMessage = `Enter the details of ${teamMember}.`
    console.log(addMessage);
    inquirer
    .prompt(internQuestions)
    .then((inAnswers)=>{
        const intern = new Intern(inAnswers.name, inAnswers.employeeID, inAnswers.email, inAnswers.school);
        internArray.push(intern);
        console.log(`Added ${inAnswers.name}!`);
        console.log(internArray);
        menu();
    });    
}

function generateFile () {
    const theHTML = render(allEmployees);
    fs.writeFile('./team.html', theHTML, (err)=>{
        if (err){
            console.log('There was an error creating your file.', err);
        } else{
            console.log('File created successfully');   
        }
    });
}

initialise();