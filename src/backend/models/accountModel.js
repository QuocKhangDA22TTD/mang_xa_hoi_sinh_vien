const db = require('../config/db');

exports.findByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM accounts WHERE email = ?', [email]);
  return rows[0]; // trả về 1 account nếu tìm thấy
};