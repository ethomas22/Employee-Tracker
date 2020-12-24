const inquirer = require('inquirer');
const sql = require('mysql');
var tracker = sql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password: require("./password"),
    database:"tracker"
});

var questions = [
    {
        type: 'list',
        message: 'What are you adding?',
        name: 'add' 
    },
    {
        type: 'list',
        message: 'What do you want to view?',
        name: 'view'
    },
    {
        type: 'input',
        message: 'Which employee do you want to update?',
        name: 'update'
    }
];

var departmentQuestions = [
    {
        type: 'input',
        message: 'What is the department ID?',
        name: 'departmentId'
    },
    {
        type: 'input',
        message: 'What is the department name?',
        name: 'departmentName'
    },
];

var roleQuestions = [
    {
        type: 'input',
        message: 'What is the role id?',
        name: 'roleId'
    },
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
        message: 'What is your employee id?',
        name: 'employeeId'
    },
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
        message: 'What is your role id?',
        name: 'roleId'
    },
    {
        type: 'input',
        message: 'What is your manager id?',
        name: 'managerId'
    }
];

tracker.connect(
    function (
        err
    ) {
        if (err) {
            throw err
        };
        
    }
);


