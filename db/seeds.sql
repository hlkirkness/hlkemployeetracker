USE employee_tracker;

INSERT INTO department (name) 
VALUES ("IT"),
("Marketing"),
("HR"),
("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer",100000,1),
("Collaborator", 45000,2),
("Recruiter",60000,3),
("Sales Person",50000,4);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Austin", "Schwarm", 1),
("Peter", "Larson", 2),
("Matthew", "DePietro", 4),
("Thomas", "Chadwick", 3),
("Harrison", "Trider", 2),
("Heather", "Kirkness", 4);