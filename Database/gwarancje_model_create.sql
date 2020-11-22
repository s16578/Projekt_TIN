-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2020-11-22 14:29:18.181

-- tables
-- Table: Computer
CREATE TABLE Computer (
    id int  NOT NULL,
    repair_id int  NOT NULL,
    model nvarchar(20)  NOT NULL,
    Ram int  NOT NULL,
    Disc int  NOT NULL,
    external_gpu bit  NOT NULL,
    Gpu nvarchar(20)  NULL,
    customer_note nvarchar(200)  NOT NULL,
    CONSTRAINT Computer_pk PRIMARY KEY  (id)
);

-- Table: Employee_repair
CREATE TABLE Employee_repair (
    id int  NOT NULL,
    employee_id int  NOT NULL,
    repair_id int  NOT NULL,
    date_start date  NOT NULL,
    date_end date  NULL,
    note nvarchar(200)  NULL,
    cost int  NOT NULL,
    CONSTRAINT Employee_repair_pk PRIMARY KEY  (id)
);

-- Table: Employees
CREATE TABLE Employees (
    id int  NOT NULL,
    name nvarchar(20)  NOT NULL,
    surname nvarchar(20)  NOT NULL,
    role nvarchar(20)  NOT NULL,
    CONSTRAINT Employees_pk PRIMARY KEY  (id)
);

-- Table: Repairs
CREATE TABLE Repairs (
    id int  NOT NULL,
    computer_id int  NOT NULL,
    status nvarchar(20)  NOT NULL,
    cost int  NULL,
    CONSTRAINT Repairs_pk PRIMARY KEY  (id)
);

-- foreign keys
-- Reference: Computer_Repairs (table: Repairs)
ALTER TABLE Repairs ADD CONSTRAINT Computer_Repairs
    FOREIGN KEY (computer_id)
    REFERENCES Computer (id);

-- Reference: Employee_repair_Employees (table: Employee_repair)
ALTER TABLE Employee_repair ADD CONSTRAINT Employee_repair_Employees
    FOREIGN KEY (repair_id)
    REFERENCES Employees (id);

-- Reference: Repairs_Employee_repair (table: Employee_repair)
ALTER TABLE Employee_repair ADD CONSTRAINT Repairs_Employee_repair
    FOREIGN KEY (repair_id)
    REFERENCES Repairs (id);

-- End of file.

