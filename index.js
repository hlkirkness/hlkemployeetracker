const inquirer = require("inquirer");
const db = require("./db/connection");

const prompt = [
  {
    type: "list",
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

    const viewAllEmployees = (req, res) => {
        const sql = `SELECT employee.first_name, employee.last_name, role.salary, role.title, department.name as "Department Name"
        FROM employee
        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department ON role.department_id = department.id`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        });
    };
      
    const viewAllDepartments = (req, res) => {
        const sql = `SELECT* FROM department`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        });
    };
      
    const viewAllRoles = (req, res) => {
        const sql = `SELECT role.id, role.title, role.salary, department.name as "Department"
          FROM role
          INNER JOIN department ON role.department_id = department.id
          `;
        db.query(sql, (err, res) => {
          if (err) throw err;
      
          console.table(res);
          mainPrompt();
        });
    };
      
    const addDepartment = () => {
        inquirer
          .prompt([
            {
              name: "name",
              type: "Input",
              message: "What is the name of the new Department?",
            },
          ])
          .then((answer) => {
            const sql = `INSERT INTO department SET ?`;
            db.query(sql, { name: answer.name }, (err, res) => {
              if (err) throw err;
              console.log(answer);
              start();
            });
          });
    };
    const addRole = ()=>{
    }
};

start();