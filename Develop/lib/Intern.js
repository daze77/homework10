// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(eName, eID, eEmail, school){
        super(eName, eID, eEmail)
        this.school = school
    }
}
module.exports = Intern;