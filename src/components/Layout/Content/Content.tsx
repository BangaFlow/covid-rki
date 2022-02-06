import React from "react";

const Content: React.FC = ({ children }) => {
  return (
    <main
      style={{
        minHeight: "82vh",
        maxWidth: "75wh",
        padding: "0px 40px",
        margin: "0 auto",
      }}
    >
      {children}
    </main>
  );
};

export default Content;
