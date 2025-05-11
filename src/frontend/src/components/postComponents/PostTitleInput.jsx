const inputStyle = {
    width: '98%',
    backgroundColor: '#FFFFFF',
    borderRadius: '80px',
    border: '1px solid #00A6FB',
    boxShadow: '0 4px 8px 4px rgba(0,0,0,0.25)',
    padding: '10px 20px',
    outline: 'none',
  };
  
  export default function PostTitleInput(props) {
    return <input type="text" placeholder="Tiêu đề bài viết" style={inputStyle} {...props} />;
  }
  