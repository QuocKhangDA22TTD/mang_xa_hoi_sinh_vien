import React, { useState } from 'react';
import Frame from '../components/Frame';
import Label from '../components/Label';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Logo from '../components/Logo';
import LoginLink from '../components/LoginLink';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Xử lý logic đăng ký ở đây
    alert(`Đăng ký:\nTài khoản: ${username}\nMật khẩu: ${password}`);
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
      <Frame
        leftContent={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Logo src="../../public/Logo.png" />
              <LoginLink onClick={() => alert('Đi tới trang đăng nhập')} />
            </div>
          }
        
        rightContent={
          <form style={formStyle} onSubmit={handleRegister}>
            <Label>ĐĂNG KÝ</Label>
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
            <TextBox
              placeholder="Nhập Lại Mật Khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit">ĐĂNG KÝ</Button>
          </form>
        }
      />
    </div>
  );
};

export default RegisterForm;
