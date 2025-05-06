import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Thêm dòng này
import Frame from '../components/Frame';
import Label from '../components/Label';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Logo from '../components/Logo';
import LoginLink from '../components/LoginLink';
import { registerUser } from '../api/register';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // ✅ Khởi tạo điều hướng

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }

    try {
      const res = await registerUser(email, password);
      
      alert(res.message);
      if(res.message == 'Đăng ký thành công')
        navigate('/login'); // ✅ Chuyển hướng sau khi đăng ký thành công
    
      
    } catch (error) {
      console.error(error);
      alert(error.message || 'Đã xảy ra lỗi khi kết nối máy chủ.');
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
      <Frame
        leftContent={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Logo src="../../public/Logo.png" />
            <LoginLink onClick={() => navigate('/login')} /> {/* ✅ Cập nhật luôn link */}
          </div>
        }
        rightContent={
          <form style={formStyle} onSubmit={handleRegister}>
            <Label>ĐĂNG KÝ</Label>
            <TextBox
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextBox
              placeholder="Nhập Mật Khẩu"
              isPassword={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextBox
              placeholder="Nhập Lại Mật Khẩu"
              isPassword={true}
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
