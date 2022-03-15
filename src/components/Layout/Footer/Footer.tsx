import React from "react";

const Footer: React.FC = ({ children }) => {
  return (
    <footer className="py-5 mt-auto font-['Comfortaa',_cursive] font-normal">
      {children}
    </footer>
  );
};

export default Footer;
