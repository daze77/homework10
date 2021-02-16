// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(eName, eID, eEmail, git){
        super(eName, eID, eEmail)
        this.git = git
    }
}
module.exports = Engineer;