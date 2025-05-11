import PostFrame from '../components/postComponents/PostFrame';
import PostHeader from '../components/postComponents/PostHeader';
import PostContentForm from '../components/postComponents/PostContentForm';
import PostFooter from '../components/postComponents/PostFooter';
 

export default function PostPage() {
  return (
    <PostFrame>
      <PostHeader />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PostContentForm />
      </div>
      <PostFooter />
    </PostFrame>
  );
}
