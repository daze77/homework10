// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(eName, eID, eEmail, eType = 'Manager', officeNumber){
        super(eName, eID, eType, eEmail)
        this.mOffice = mOffice
    }
}


async function managerInfo() {
    const managerresponse = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'mOffice',
            message: 'Please enter the Employees office number.',
        },
        
        {
            type: 'list',
            name: 'eType',
            message: 'Please specify the type of employee to be established.',
            choices: ['Engineer', 'Intern', 'No Other Employees at this time']
        },
  ])
  console.log( `our reponse is `, managerresponse)
 const manager = new Manager (`${managerresponse.eName}`, `${managerresponse.eID}`, `${managerresponse.eEmail}`, `${managerresponse.mOffice}`)
 
  nextQuestions(managerresponse)
}  



module.exports = Manager;