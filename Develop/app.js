const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// employee list array to be compiled here
let employeeList =[]

// start the function to prompt for manager information
async function team() {
    const managersInfo = await inquirer
    .prompt([

    {
        type: 'input',
        name: 'name',
        message: 'Enter the managers name.',
    },
        {
        type: 'input',
        name: 'id',
        message: 'Please enter the managers ID number.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the managers email address.',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the managers office number.',
    },
    {
        type: 'list',
        name: 'newEmployee',
        message: 'Please specify the type of employee to be established under this manager.',
        choices: ['Engineer', 'Intern', 'No Other Employees at this time']
    }
    ])
    // this will show us what we inputed at the prompts
    console.log( `our reponse is `, managersInfo)

    // put that information into tha new manager item
    const manager = new Manager (managersInfo.name, managersInfo.id, managersInfo.email, managersInfo.officeNumber, managersInfo.role)
    
    // to show us in console what we will store for manager
    console.log(manager)

    // push the new manager into the employee list
    employeeList.push(manager)

    // set this nextEmployee based on what was selected in the last question from the first set of promts - this will determine how we move forward
    let nextEmployee = managersInfo.newEmployee

    // if we didn't select 'no other employees at this time - we ask additional questions to obtain the other employees information
    while (nextEmployee !== 'No Other Employees at this time'){
        const employeeInfo = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Enter the ${nextEmployee} name.`,
            },
                {
                type: 'input',
                name: 'id',
                message: `Please enter the ${nextEmployee} ID number.`,
            },
            {
                type: 'input',
                name: 'email',
                message: `Please enter the ${nextEmployee} email address.`,
            },

            {
                // we used ternary operation here to shorten the code and change this question based on if the employee we are adding is an Engineer or Intern
                type: 'input',
                name: `${nextEmployee === 'Engineer'? 'github': 'school'}`,
                message: `Please enter the ${nextEmployee} ${nextEmployee === 'Engineer'? 'Github': 'School'
                    } name`
            },          
        ])
        // console log to confirm we completed the second set of questions and for which employee 
        console.log("we just completed", nextEmployee)
        console.log("Done that one")

        // save the employee based on type as there is different information depending on type
        if (nextEmployee === 'Engineer'){
            const engineer = new Engineer (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.github, employeeInfo.role)
            console.log(engineer)
            employeeList.push(engineer)
        } else {
            const intern = new Intern (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.school, employeeInfo.role)
            console.log(intern)
            employeeList.push(intern)
        }
       
        // confirm if there is another employee to add - if so we loop through the second round of quesitons again else we pop out of the loop
        const nemployeeInfo = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'newEmployee',
                message: 'Please specify the type of employee to be established under this manager.',
                choices: ['Engineer', 'Intern', 'No Other Employees at this time']
            }  
            
        ])
        nextEmployee = nemployeeInfo.newEmployee
    }
    


    // Pull the information and send to directory if it exists or else create it with information
    if( !fs.existsSync(OUTPUT_DIR) ) fs.mkdirSync(OUTPUT_DIR)
    fs.writeFileSync(outputPath, render(employeeList), "utf-8");

    console.log( `Completed writing to: ${outputPath}` )


 
}
team()

