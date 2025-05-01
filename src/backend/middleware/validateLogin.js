module.exports = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email và mật khẩu là bắt buộc.' });
    }
    next();
  };