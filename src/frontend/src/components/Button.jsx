import React from 'react';

const Button = ({ children, onClick }) => {
  const buttonStyle = {
    backgroundColor: '#0582CA',
    color: '#ffffff',
    border: 'none',
    borderRadius: '1.5rem',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.25)',
    display: 'inline-block',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
