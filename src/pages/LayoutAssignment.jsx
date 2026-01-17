import React from "react";
import Layout from "../layouts/Layout";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";

const LayoutAssignment = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans text-gray-900">
      <Sidebar>
        <div className="p-2 mb-2 font-bold text-gray-400 uppercase text-xs">
          Menu
        </div>
        <div className="p-2 bg-gray-700 rounded mb-2">Sidebar Link 1</div>
        <div className="p-2 bg-gray-700 rounded mb-2">Sidebar Link 2</div>
        <div className="p-2 bg-gray-700 rounded">Sidebar Link 3</div>
      </Sidebar>

      <div className="flex flex-col flex-1 h-full overflow-hidden relative">
        <Header>
          <h1 className="text-xl font-bold">Header Area</h1>
        </Header>

        <Main>
          <div className="flex items-center justify-center h-full text-2xl font-bold text-gray-400">
            Main
          </div>
        </Main>

        <Footer>
          <p>Footer Content Area</p>
        </Footer>
      </div>
    </div>
  );
};

export default LayoutAssignment;
