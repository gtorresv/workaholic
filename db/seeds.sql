INSERT INTO department (department_name)
VALUES 
('Management'), 
('Sales'),
('Engineering'),
('IT Department'),
('Finance'),
('Administration');

INSERT INTO role (title, salary, department_id)
VALUES
('Manager', 80000, 1),
('Salesperson', 75000, 2),
('Computer Engineer', 95000, 3),
('Office Administrator', 72000, 6),
('Systems Analyst', 69000, 4),
('IT Specialist', 76000, 4),
('Accountant', 78000, 5),
('IT Manager', 68000, 1),
('Software Engineer', 110000, 3);


INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES
('Laura', 'Banks', 0, 1),
('Tom', 'Smith', 1, 2),
('Jerry', 'Smith', 1, 3),
('Ava', 'Jones', 1, 4),
('Noah', 'Davis', 8, 5),
('Isabella', 'Lopez', 8, 6),
('Sophia', 'Anderson', 1, 7),
('Liam', 'Swift', 0, 8),
('Maite', 'Casas', 1, 9);
