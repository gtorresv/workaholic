const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connection to the database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username
      user: 'root',
      // Add your MySQL Password
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

  const questions = [
    {
        type: 'list',
        name: 'decisions',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'Add Employees',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View all Departments',
            'Add Department',
            'Quit'
        ]
    }
  ];

  // Function to initialize app
  function init() {
    inquirer.prompt(questions)
    .then((response) => {
        switch (response.decisions) {
            case 'View all employees':
              viewEmployees();
              break;
            case 'Add Employees':
              addEmployee();
              break;
            case 'Update Employee Role':
              updateEmployeeRole();
              break;
            case 'View All Roles':
              viewRoles();
              break;
            case 'Add Role':
              addRole();
              break;
            case 'View all Departments':
              viewDepartments();
              break;
            case 'Add Department':
              addDepartment();
              break;
            case 'Quit':
              console.log("Goodbye!");
              db.end();
              break;
        }
    });
  }

// Function to view all employees
function viewEmployees() {
    // Perform a SQL query to retrieve employee data
    const sql = 'SELECT * FROM employee';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error getting employee data:', err);
        return;
      }
  
      // Display employee data in a table
      console.table(results);
  
      // Return to the main menu
      init();
    });
  }
  
  // Function to add an employee
  function addEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "Enter the employee's first name: "
      },
      {
        type: 'input',
        name: 'last_name',
        message: "Enter the employee's last name: "
      },
      // TODO: Add more prompts to get employees role and choose manager
    ]).then((employeeData) => {
      // Perform a SQL query to insert the new employee into the database
      const sql = 'INSERT INTO employee (first_name, last_name) VALUES (?, ?)';
      const values = [employeeData.first_name, employeeData.last_name];
  
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error adding employee:', err);
        } else {
          console.log('Employee added successfully.');
        }
  
        // Return to the main menu
        init();
      });
    });
  }
  
  // Function to update an employee's role
  function updateEmployeeRole() {
    // Inquirer prompt to get user input for the update
    // TODO: Finish code to get employee and role data to display as choices  
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: "Which employee's role would you like to update?",
            choices: [employees]
        },
        {
            type: 'list',
            name: 'role',
            message: "Which role would you like to assign to the selected employee?",
            choices: [roles]
        }
    ])
    // SQL query to update the employee's role in the database
    const sql = 'UPDATE * FROM employee AS role_id'
    // Return to the main menu
    init();
  }

  // Function to view all departments
function viewDepartments() {
    // Perform a SQL query to retrieve department data
    const sql = 'SELECT * FROM department';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error getting department data:', err);
        return;
      }
      // Display department data in a table
      console.table(results);
      // Return to the main menu
      init();
    });
  }

  // Function to view all roles
function viewRoles() {
    // SQL query to retrieve role data
    const sql = 'SELECT * FROM role';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error getting role data:', err);
        return;
      }
      // Display role data in a table
      console.table(results);
      // Return to the main menu
      init();
    });
  }

  function addRole() {
    // Inquirer prompt to get user input for new role

    // SQL query to add new role

    // Return to main menu
    init();
  }

  function addDepartment() {
    // Inquirer prompt to get user input to add department

    // SQL query to add new department

    // Return to main menu
    init();
  }
  

  init();