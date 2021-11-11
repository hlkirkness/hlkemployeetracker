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