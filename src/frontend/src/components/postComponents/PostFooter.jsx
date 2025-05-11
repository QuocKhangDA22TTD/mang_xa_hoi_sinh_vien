import PostButton from './PostButton';

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '12.5%',
  backgroundColor: '#EEEBD3',
  borderTop: '1px solid rgba(0,0,0,0.25)',
  padding: '10px',
};

export default function PostFooter() {
  return (
    <div style={footerStyle}>
      <div>
        <PostButton text="Tải ảnh" backgroundColor="#A98743" textColor="#FFFFFF" />
        <PostButton text="Emoji" backgroundColor="#A28497" textColor="#FFFFFF" />
        <PostButton text="Link" backgroundColor="#006494" textColor="#FFFFFF" />
      </div>
      <PostButton text="Đăng bài" backgroundColor="#00A6FB" textColor="#FFFFFF" />
    </div>
  );
}
