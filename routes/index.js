const { express } = require('express');
const inquirer = require('inquirer');
const db = require('../db/connection');
const cTable = require('console.table');
const { isAsyncFunction } = require('util/types');
const { allowedNodeEnvironmentFlags } = require('process');

let departments = [];
let roles = [];
let employees = [];
let updatedRole = [];

console.log("--------------Employee Tracker--------------------");

async function startQuestions() {
    const question = await inquirer.prompt([
        {
            type: 'list',
            name: 'trackerAction',
            message: "What would you like to do today?",
            choices: ['View all departments', 'View all employees', 'View all roles', 'Add a department', 'Add an employee', 'Add a role', 'Update an employee role', 'Quit']
        }
    ])

    if (question.trackerAction === 'View all departments') {
        viewDepartments();
    }

    if (question.trackerAction === 'View all employees') {
        viewEmployees();
    }

    if (question.trackerAction === 'View all roles') {
        viewRoles();
    }

    if (question.trackerAction === 'Add a department') {
        newDepartment = await inquirer.prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: "What is the new Department's name? (This is required)",
                validate: newDepartment => {
                    if (newDepartment) {
                        return true;
                    } else {
                        console.log("Enter a department name!")
                    }
                }
            }
        ])
        if (newDepartment) {
            departments.push(newDepartment);
        }
        addDepartment();
    }

    if (question.trackerAction === 'Add an employee') {
        newEmployee = await inquirer.prompt([
            {
                type: 'input',
                name: 'newEmployeeFirstName',
                message: "What is the new employee's first name? (This is required)",
                validate: newEmployeeFirstName => {
                    if (newEmployeeFirstName) {
                        return true;
                    } else {
                        console.log("Enter their first name!")
                    }
                }
            },
            {
                type: 'input',
                name: 'newEmployeeLastName',
                message: "What is the new employee's last name? (This is required)",
                validate: newEmployeeLastName => {
                    if (newEmployeeLastName) {
                        return true;
                    } else {
                        console.log("Enter their last name!")
                    }
                }
            }
            {
                type: 'input',
                name: 'roleID',
                message: "What is the new employee's role ID? (This is required)",
                validate: roleID => {
                    if (roleID) {
                        return true;
                    } else {
                        console.log("Enter their role ID!")
                    }
                }
            }
            {
                type: 'input',
                name: 'managerID',
                message: "What is their manager's ID? (This is required)",
                validate: managerID => {
                    if (managerID) {
                        return true;
                    } else {
                        console.log("Enter their manager's ID!")
                    }
                }
            }
            {
                type: 'input',
                name: 'departmentID',
                message: "What is the new employee's department ID? (This is required)",
                validate: departmentID => {
                    if (departmentID) {
                        return true;
                    } else {
                        console.log("Enter the department ID!")
                    }
                }
            }
        ])
        if (newEmployee) {
            employees.push(newEmployee);
        }
        addEmployee();
    }

    if (question.trackerAction === 'Add a role') {
        newRole = await inquirer.prompt([
            {
                type: 'input',
                name: 'newRole',
                message: "What is the name of the new role? (This is required)",
                validate: newRole => {
                    if (newRole) {
                        return true;
                    } else {
                        console.log("Enter the name of the new role!")
                    }
                }
            }
        ])
        if (newRole) {
            roles.push(newRole);
        }
        addRole();
    }





}