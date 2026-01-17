import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Count from "./pages/Count";
import Auth from "./pages/Auth";
import LayoutAssignment from "./pages/LayoutAssignment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/counter" element={<Count />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/layout" element={<LayoutAssignment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
