USE MXHSV;

CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'banned', 'pending') DEFAULT 'active'
);

CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
);

ALTER TABLE accounts AUTO_INCREMENT = 1000;
ALTER TABLE posts AUTO_INCREMENT = 1000;

INSERT INTO accounts (email, password, created_at, status) VALUES
('alice@example.com', 'hashedpassword1', NOW(), 'active'),
('bob@example.com', 'hashedpassword2', NOW(), 'pending'),
('charlie@example.com', 'hashedpassword3', NOW(), 'banned');

INSERT INTO posts (account_id, content, image) VALUES
(1000, N'Đây là nội dung bài đăng đầu tiên của tôi.', NULL),
(1001, N'Bài đăng này có cả nội dung và hình ảnh.', 'image1.jpg'),
(1002, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NULL),
(1001, N'Bài đăng này không có hình ảnh.', NULL),
(1001, N'Đây là một bài đăng khác để thử nghiệm.', NULL);

