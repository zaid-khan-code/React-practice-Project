import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans text-gray-900">
      {children}
    </div>
  );
};

export default Layout;
