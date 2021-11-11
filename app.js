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

const viewAllDepartments = (req, res) => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, res) => {
      if (err) throw err;
  
      console.table(res);
      mainPrompt();
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
  
const viewAllEmployees = (req, res) => {
    const sql = `SELECT employee.first_name, employee.last_name, role.salary, role.title, department.name as "Department Name", Manager.first_name AS "Manager"
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee Manager ON employee.manager_id = Manager.id`;
    db.query(sql, (err, res) => {
      if (err) throw err;
      console.table(res);
      mainPrompt();
    });
};

const addDepartment = () => {
    inquirer
        .prompt([
            { name: "name", type: "input", message: "What is the department name?" },
        ])
        .then((answer) => {
            db.query(
                `INSERT INTO department SET ?`,
            {
            name: answer.name,
            },
            (err) => {
                if (err) throw err;
                console.log(`New Department created called ${answer.name}`);
            mainPrompt();
          }
        );
    });
};