const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kiểm tra dữ liệu hợp lệ
    if (!email || !password) {
      return res.status(400).json({ message: 'Vui lòng nhập đầy đủ email và mật khẩu' });
    }

    // Kiểm tra email đã tồn tại
    const [existing] = await db.execute('SELECT * FROM accounts WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Email đã được sử dụng' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo tài khoản mới
    const [result] = await db.execute(
      'INSERT INTO accounts (email, password) VALUES (?, ?)',
      [email, hashedPassword]
    );

    res.status(201).json({ message: 'Đăng ký thành công', accountId: result.insertId });
  } catch (err) {
    console.error('Đăng ký lỗi:', err);
    res.status(500).json({ message: 'Lỗi máy chủ.' });
  }
};