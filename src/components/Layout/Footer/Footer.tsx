import React from "react";

const Footer: React.FC = ({ children }) => {
  return (
    <footer style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 400, padding: '10px 20px' }}>
      {children}
    </footer>
  );
};

export default Footer;
