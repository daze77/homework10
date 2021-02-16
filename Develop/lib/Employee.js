// TODO: Write code to define and export the Employee class
const inquirer = require( 'inquirer' )


class Employee {
    constructor(name, Id, email, role = 'Manager' ){
    this.name = name
    this.Id = Id
    this.email = email
    this.role = role
    }
}




module.exports = Employee;




