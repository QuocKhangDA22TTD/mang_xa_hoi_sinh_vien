const frameStyle = {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(to bottom, #FFFFFF 0%, #00A6FB 100%)',
    display: 'flex',
    flexDirection: 'column',
  };
  
  export default function PostFrame({ children }) {
    return <div style={frameStyle}>{children}</div>;
  }
  