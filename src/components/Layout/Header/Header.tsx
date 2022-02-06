import React from "react";

const Header: React.FC = ({ children }) => {
  return <header style={{padding: '10px 20px', marginTop: '20px'}}>{children}</header>;
};

export default Header;
