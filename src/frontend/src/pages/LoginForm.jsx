import React, { useState } from 'react';
import LoginFrame from '../components/LoginFrame';
import Label from '../components/Label';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Logo from '../components/Logo';
import LoginLink from '../components/LoginLink';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Thêm xử lý đăng nhập
    alert(`Đăng nhập với:\nTài khoản: ${username}\nMật khẩu: ${password}`);
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
        // Đặt form đăng nhập bên trái
        leftContent={
            <form style={formStyle} onSubmit={handleLogin}>
            <Label>ĐĂNG NHẬP</Label>
            <TextBox
              placeholder="Nhập Tài Khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextBox
              placeholder="Nhập Mật Khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">ĐĂNG NHẬP</Button>
          </form>
        }

        // Logo ở banner bên phải
        rightContent={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Logo src="../../public/Logo.png" />
            <div style={{ color: '#fff', marginTop: '20px' }}>Chưa có tài khoản?</div>
            <span
                onClick={() => alert('Đi tới trang đăng ký')}
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