DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS employeeroles;
DROP TABLE IF EXISTS department;

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employeeroles(id) ON DELETE CASCADE
)
