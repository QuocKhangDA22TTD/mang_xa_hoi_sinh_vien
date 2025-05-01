USE MXHSV;

CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME,
    status ENUM('active', 'banned', 'pending') DEFAULT 'active'
);

ALTER TABLE accounts AUTO_INCREMENT = 1000;

INSERT INTO accounts (email, password, created_at, last_login, status) VALUES
('alice@example.com', 'hashedpassword1', NOW(), NOW(), 'active'),
('bob@example.com', 'hashedpassword2', NOW(), NULL, 'pending'),
('charlie@example.com', 'hashedpassword3', NOW(), NOW(), 'banned');
