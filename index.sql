drop database if exists tracker;

create database tracker;

use tracker;

create table department (
    id INT PRIMARY KEY,
    departmentName VARCHAR(30)
);

create table employeeRole (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

create table employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
); 
