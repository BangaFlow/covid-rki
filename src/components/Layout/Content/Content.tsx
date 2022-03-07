import React from "react";

const Content: React.FC = ({ children }) => {
  return (
    <main
      style={{
        minHeight: "82vh",
        maxWidth: "80%",
        padding: "0px 40px",
        margin: "0 auto",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {children}
    </main>
  );
};

export default Content;
