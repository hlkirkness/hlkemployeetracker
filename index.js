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