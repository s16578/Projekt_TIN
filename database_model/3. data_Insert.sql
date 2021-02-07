INSERT INTO Employees (name, surname, role) VALUES ('Kazimierz', 'Drozda', 'Tester');
INSERT INTO Employees (name, surname, role) VALUES ('Zbyszek', 'Ptyœ', 'Serwisant');
INSERT INTO Employees (name, surname, role) VALUES ('Radek', 'Op', 'Menadzer');

INSERT INTO Computers (model, Ram, Disc, Gpu, customer_note) VALUES ('Lenovo Legion', 16, 512, 'Nvidia g', 'Nie dzia³a wejœcie zasilania');
INSERT INTO Computers (model, Ram, Disc, Gpu, customer_note) VALUES ('HP gaming', 8, 128, null, 'Brak ch³odzenia');
INSERT INTO Computers (model, Ram, Disc, Gpu, customer_note) VALUES ('Dell Inspire', 32, 1024, 'Tigra', 'Przycisk ESC nie dzia³a');

INSERT INTO Repairs (employee_id, computer_id, date_start, date_end, note, status, cost) VALUES (1, 1, '2020-08-20', '2020-08-30', 'Poprawione wejœcie', 'Naprawiony', 400);
INSERT INTO Repairs (employee_id, computer_id, date_start, date_end, note, status, cost) VALUES (2, 2, '2021-01-20', null, null, 'W trakcie naprawy', null);
INSERT INTO Repairs (employee_id, computer_id, date_start, date_end, note, status, cost) VALUES (1, 2, '2020-12-25', '2020-12-30', 'Wymiana wentylatorów', 'Naprawiony', 400);
INSERT INTO Repairs (employee_id, computer_id, date_start, date_end, note, status, cost) VALUES (3, 3, '2020-12-20', '2020-12-21', 'Czyszczenie', 'Zakoñczony serwis', 100);


INSERT INTO Users (login, password, role) VALUES ('admin', 'admin', 'admin');