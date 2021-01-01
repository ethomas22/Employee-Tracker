const inquirer = require('inquirer');
const sql = require('mysql');
var tracker = sql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password: require("./password"),
    database:"tracker"
});

var question = [
    {
        type: 'list',
        message: 'What do you want to do?',
        name: 'initial', 
        choices: ['add department', 'add employee', 'add role', 'view departments', 'view role', 'view employee', 'update employee role']
    }];

 var updateEmployeeQuestions = [
    {
        type: 'input',
        message: 'Which employee do you want to update?',
        name: 'update'
    },
    {
        type: 'input',
        message: 'What is the new role for this employee?',
        name: 'update'
    }
];

var departmentQuestions = [
    {
        type: 'input',
        message: 'What is the department name?',
        name: 'departmentName'
    },
];

var roleQuestions = [
    {
        type: 'input',
        message: 'What is your role tile?',
        name: 'roleTitle'
    },
    {
        type: 'input',
        message: 'What is your salary?',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'What is the department id specific to your role?',
        name: 'departmentRoleId'
    }
];

var employeeQuestions = [
    {
        type: 'input',
        message: 'What is your first name?',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'What is your last name?',
        name: 'lastName'
    },
    {
        type: 'input',
        message: 'What is your manager id?',
        name: 'managerId'
    }
];

tracker.connect(
    function (err) {
        if (err) {
            throw err  
        } else {
            options()
        }       
    }  
);
function options(){
    inquirer.prompt(question)
        .then(function (answer){
            if (answer.initial === "add department") {
                inquirer
                .prompt(departmentQuestions)
                .then(addDepartment)
            }
            if (answer.initial === "add employe") {
                inquirer
                .prompt(employeeQuestions)
                .then(addEmployee)
            }
            if (answer.initial === "add role") {
                inquirer
                .prompt(roleQuestions)
                .then(addRole)
            }
            if (answer.initial === "view departments") {
                inquirer
                .prompt()
                .then()
            }
        })
}

// questions: view departments', 'view role', 'view employee', 'update employee role'
// function for add department
function addDepartment(answer) {
    tracker.query("insert into department (departmentName) values (?)", answer.departmentName, function (err) {
        if (err) 
            throw err;
        else {
            console.log("Success")
            options()
        }
    })
}
// add a role

// add an employee
function addEmployee() {

}
// view department
function viewDepartments() {
    tracker.query("select department from departmentName;", function (err) {
        if (err)
            throw err;
        else {
            
        }
    }) 
}
// add a role
function addRole() {

}
// view employee

// update employee role



