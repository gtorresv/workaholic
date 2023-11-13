const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connection to the database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username
      user: 'root',
      // Add your MySQL Password
      password: 'password',
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
        
    });
  }

  init();