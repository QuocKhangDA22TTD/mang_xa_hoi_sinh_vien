const avatarStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid #FFFFFF',
    boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
    backgroundImage: 'url("https://cdnv2.tgdd.vn/mwg-static/common/News/1575648/hinh-nen-dien-thoai-cute-30-2.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    aspectRatio: '1',
  };
  
  export default function PostAvatar() {
    return <div style={avatarStyle}></div>;
  }
  