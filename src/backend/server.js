const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');

const app = express();

// Middleware
app.use(express.json()); // Cho phép xử lý JSON
app.use(cors()); // Cho phép CORS

// Hàm kết nối MySQL với retry logic
const connectWithRetry = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('✅ Connected to MySQL');
    await connection.end();
    return true;
  } catch (err) {
    console.error('❌ MySQL connection error:', err);
    return false;
  }
};

// Kiểm tra kết nối MySQL liên tục mỗi 5 giây cho đến khi thành công
const checkDbConnection = async () => {
  let connected = false;
  while (!connected) {
    connected = await connectWithRetry();
    if (!connected) {
      console.log('🔄 Retrying in 5 seconds...');
      await new Promise(resolve => setTimeout(resolve, 5000)); // Chờ 5 giây
    }
  }
  // Sau khi kết nối thành công, khởi động server
  startServer();
};

// Hàm để start server sau khi MySQL sẵn sàng
const startServer = () => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Kiểm tra kết nối và start server
checkDbConnection();
