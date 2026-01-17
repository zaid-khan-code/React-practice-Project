import React from "react";

const Header = ({ children }) => {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center h-16 w-full">
      {children}
    </header>
  );
};

export default Header;
