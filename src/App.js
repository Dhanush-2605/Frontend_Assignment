import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Home";
import Verification from "./Verification";
// import { Page1 } from "./Forms/Page1";
// import { Page2 } from "./Forms/Page2";
// import { Page3 } from "./Forms/Page3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  // const [page, setPage] = useState(1);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>

    // </div>
  );
};

export default App;
