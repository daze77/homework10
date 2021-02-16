// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(eName, eID, eEmail, mOffice){
        super(eName, eID, eEmail)
        this.mOffice = mOffice
    }
}

async function managerInfo() {
    const response = await inquirer
    .prompt([
    {
        type: 'input',
        name: 'eName',
        message: 'Enter the Team Managers name.',
    },
    {
        type: 'input',
        name: 'eID',
        message: 'Please enter the Employees ID number.',
    },
    {
        type: 'input',
        name: 'eEmail',
        message: 'Please enter the Employees email address.',
    },

    {
        type: 'input',
        name: 'eOffice',
        message: 'Please enter the Employees office number.',
    },
 
    {
        type: 'list',
        name: 'employeeType',
        message: 'Please specify the type of employee to be established.',
        choices: ['Engineer', 'Intern', 'No Other Employees at this time']
    },

  ])
  console.log( `our reponse is `, response)
  const manager = new Manager (eName, eID, eEmail, eOffice)
}

module.exports = Manager;