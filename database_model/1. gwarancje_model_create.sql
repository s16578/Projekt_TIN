-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-02-06 12:29:43.214

-- tables
-- Table: Computers
CREATE TABLE Computers (
    id int  NOT NULL IDENTITY,
    model nvarchar(30)  NOT NULL,
    Ram int  NOT NULL,
    Disc int  NOT NULL,
    Gpu nvarchar(200)  NULL,
    customer_note nvarchar(200)  NOT NULL,
    CONSTRAINT Computers_pk PRIMARY KEY  (id)
);

-- Table: Employees
CREATE TABLE Employees (
    id int  NOT NULL IDENTITY,
    name nvarchar(30)  NOT NULL,
    surname nvarchar(30)  NOT NULL,
    role nvarchar(1000)  NOT NULL,
    CONSTRAINT Employees_pk PRIMARY KEY  (id)
);

-- Table: Repairs
CREATE TABLE Repairs (
    id int  NOT NULL IDENTITY,
    employee_id int  NOT NULL,
    computer_id int  NOT NULL,
    date_start date  NOT NULL,
    date_end date  NULL,
    note nvarchar(200)  NULL,
    status nvarchar(100)  NOT NULL,
    cost int  NULL,
    CONSTRAINT Repairs_pk PRIMARY KEY  (id)
);

-- Table: Users
CREATE TABLE Users (
    id int  NOT NULL IDENTITY,
    login nvarchar(20)  NOT NULL,
    password nvarchar(500)  NOT NULL,
    role nvarchar(20)  NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY  (id)
);

-- foreign keys
-- Reference: Computer_Repairs (table: Repairs)
ALTER TABLE Repairs ADD CONSTRAINT Computer_Repairs
    FOREIGN KEY (computer_id)
    REFERENCES Computers (id);

-- Reference: Employee_repair_Employees (table: Repairs)
ALTER TABLE Repairs ADD CONSTRAINT Employee_repair_Employees
    FOREIGN KEY (employee_id)
    REFERENCES Employees (id);

-- End of file.

