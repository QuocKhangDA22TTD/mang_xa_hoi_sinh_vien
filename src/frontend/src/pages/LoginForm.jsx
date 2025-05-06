import React, { useState } from 'react';
import { loginUser } from '../api/Login';
import { useNavigate } from 'react-router-dom';
import LoginFrame from '../components/LoginFrame';
import Label from '../components/Label';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Logo from '../components/Logo';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      alert(`Đăng nhập thành công! ID người dùng: ${data.user.id}`);
      // TODO: điều hướng hoặc lưu token/user
    } catch (err) {
      alert(`Lỗi: ${err.message}`);
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
  };

  const containerWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e5e5e5',
  };

  return (
    <div style={containerWrapper}>
      <LoginFrame
        leftContent={
          <form style={formStyle} onSubmit={handleLogin}>
            <Label>ĐĂNG NHẬP</Label>
            <TextBox
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextBox
              placeholder="Nhập Mật Khẩu"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">ĐĂNG NHẬP</Button>
          </form>
        }
        rightContent={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Logo src="../../public/Logo.png" />
            <div style={{ color: '#fff', marginTop: '20px' }}>Chưa có tài khoản?</div>
            <span
              onClick={() => navigate('/register')}
              style={{
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginTop: '5px',
              }}
            >
              Đăng ký
            </span>
          </div>
        }
      />
    </div>
  );
};

export default LoginForm;
