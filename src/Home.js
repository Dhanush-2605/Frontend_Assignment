import React from "react";
import { useState } from "react";
import { Page1 } from "./Forms/Page1";
import { Page2 } from "./Forms/Page2";
import { Page3 } from "./Forms/Page3";
import { Link } from "react-router-dom";

import "./App.css";
const Home = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
    <div className="title">  <h1>Multistep Form</h1>  </div>
   
      <div className="wrapper">
        <div className="content">
          {page === 1 ? <Page1 /> : page === 2 ? <Page2 /> : <Page3 />}
        </div>
        <div className="button">
          <div>
            {page > 1 && (
              <button
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                prev
              </button>
            )}
          </div>
          <div>
            {page < 3 && (
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                next
              </button>
            )}
          </div>
          <div className="successButton">
            {page === 3 && (
              <button
                onClick={() => {
                  alert("Successfully Submitted!");
                }}
              >
                Ok
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="moveButton">
        <Link to="/verification">
          <button>Verification Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
