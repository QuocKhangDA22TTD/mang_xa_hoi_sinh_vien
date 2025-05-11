export default function PostButton({ text, style = {}, backgroundColor, textColor, ...props }) {
    return (
      <button
        style={{
          padding: '10px 20px',
          borderRadius: '10px',
          border: '1px solid rgba(0,0,0,0.25)',
          backgroundColor: backgroundColor,
          color: textColor,
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: '0 4px 2px rgba(0,0,0,0.25)',
          margin: '0 5px',
          ...style,
        }}
        {...props}
      >
        {text}
      </button>
    );
  }
  