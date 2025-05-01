const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { email, password } = req.body;

    // Kiểm tra dữ liệu hợp lệ
    if (!email || !password) {
        return res.status(400).json({ message: 'Vui lòng nhập đầy đủ email, tên, mật khẩu' });
    }

    // Kiểm tra account đã tồn tại chưa
    db.query('SELECT * FROM accounts WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            return res.status(400).json({ message: 'Email đã được sử dụng' });
        }

        // Mã hóa mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert account
        const account = {
            email,
            password: hashedPassword,
        };
        db.query('INSERT INTO accounts SET ?', account, (err, result) => {
            if (err) throw err;
            res.status(201).json({ message: 'Đăng ký thành công', accountId: result.insertId });
        });
    });
};
