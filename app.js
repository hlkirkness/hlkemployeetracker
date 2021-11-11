const inquirer = require("inquirer");
const db = require("./db/connection");

const options = [
  {
    type: "List",
    name: "Selection",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update Role",
      "Update Employee Manager",
      "Exit",
    ],
  },
];

const mainPrompt = () => {
    inquirer.prompt(options).then((answer) => {
      switch (answer.selection) {
        case "View All Departments":
          viewAllDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update Role":
          updateRole();
          break;
        case "Update Employee Manager":
          updateManger();
          break;
        case "Exit":
          db.end();
      }
    });
};