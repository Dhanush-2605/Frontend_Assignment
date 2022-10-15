import React, { useContext } from "react";
import FormContext from "../FormContext";
import "./page.css";
export const Page2 = () => {
  const { email, setEmail, password, setPassword } = useContext(FormContext);

  return (
    <form className="Form">
      <div className="insideTitle">
        <h2>Credentials</h2>
      </div>
      <div className="formDiv">
        <label className="form-label">Email</label>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="formDiv">
        <label className="form-label">Password</label>
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
