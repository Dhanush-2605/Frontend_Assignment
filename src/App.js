import "./App.css";
import Home from "./Home";
import Verification from "./Verification";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  );
};

export default App;
