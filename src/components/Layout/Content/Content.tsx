import React from "react";

const Content: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center mx-auto min-h-[83.33vh] w-11/12 lg:w-10/12">
      {children}
    </main>
  );
};

export default Content;
