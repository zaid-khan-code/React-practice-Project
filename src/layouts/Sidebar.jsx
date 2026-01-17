import React from "react";

const Sidebar = ({ children }) => {
  return (
    <aside className="bg-gray-800 text-white w-64 h-full p-4 flex-shrink-0 hidden md:block transition-all duration-300 overflow-y-auto">
      <div className="flex flex-col gap-4">{children}</div>
    </aside>
  );
};

export default Sidebar;
