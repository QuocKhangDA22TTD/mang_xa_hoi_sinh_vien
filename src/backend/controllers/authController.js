const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Account = require('../models/accountModel');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const account = await Account.findByEmail(email);
    if (!account) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng.' });
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng.' });
    }

    if (account.status !== 'active') {
      return res.status(403).json({ message: `Tài khoản đã bị ${account.status}.` });
    }

    const token = jwt.sign({ id: account.id, email: account.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ message: 'Đăng nhập thành công!', user: { email: account.email, id: account.id } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Lỗi máy chủ.' });
  }
};