const inquirer = require("inquirer");
const db = require("./db/connection");

const prompt = [
  {
    type: "List",
    name: "Selections",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Departments",
      "View All Roles",
      "Add an Employee",
      "Add a Role",
      "Add a Department",
      "Update a Role",
      "Exit",
    ],
  },
];

const start = () => {
    inquirer.prompt(prompt).then((answer) => {
      switch (answer.selections) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Update Role":
          updateRole();
          break;
        case "Exit":
          db.end();
          break;
      }
    });
  };

  start();