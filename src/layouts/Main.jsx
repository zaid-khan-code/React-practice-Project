import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex-1 bg-gray-50 p-6 overflow-y-auto h-full">
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
};

export default Main;
