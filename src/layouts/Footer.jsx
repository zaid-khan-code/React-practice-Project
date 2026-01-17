import React from "react";

const Footer = ({ children }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 text-center border-t border-gray-700">
      <div className="container mx-auto">{children}</div>
    </footer>
  );
};

export default Footer;
