import React from 'react';

const TextBox = ({ placeholder, value, onChange }) => {
  const inputStyle = {
    width: '80%',
    backgroundColor: '#D9D9D9',
    border: 'none',
    borderRadius: '10px',
    color: '#111827',
    padding: '10px 15px',
    fontSize: '16px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    outline: 'none',
  };

  return (
    <input
      type="text"
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextBox;
