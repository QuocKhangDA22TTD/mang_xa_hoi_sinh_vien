const formStyle = {
    width: '95%',
    height: '90%',
    backgroundColor: '#EEEBD3',
    borderRadius: '10px',
    border: '1px solid #EEEBD3',
    boxShadow: '0 0 4px 4px rgba(0,0,0,0.25)',
    color: '#000000',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    padding: '1rem',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    whiteSpace: 'pre-wrap', /* Giữ định dạng văn bản */
    wordWrap: 'break-word', /* Ngắt từ khi hết dòng */
    textAlign: 'justify',
    lineHeight: 1.5, /* Điều chỉnh khoảng cách dòng */
  };
  
  export default function PostContentForm(props) {
    return <textarea style={formStyle} placeholder="Nhập nội dung bài viết..." {...props} spellCheck="false"></textarea>;
  }
  