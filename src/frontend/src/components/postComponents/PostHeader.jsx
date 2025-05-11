import PostAvatar from './PostAvatar';
import PostTitleInput from './PostTitleInput';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  width: '100%',
  height: '12.5%',
  backgroundColor: '#0582CA',
  borderBottom: '1px solid rgba(0,0,0,0.25)',
};

export default function PostHeader() {
  return (
    <div style={headerStyle}>
      <div style={{ width: '3rem', margin: '0 1rem 0 1.5rem', }}>
        <PostAvatar />
      </div>
      <div style={{ width: '100%' }}>
        <PostTitleInput />
      </div>
    </div>
  );
}
