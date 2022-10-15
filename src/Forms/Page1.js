import React, { useContext } from "react";
import FormContext from "../FormContext";
import "./page.css";

export const Page1 = () => {
  const { firstName, setFirstName, lastName, setLastName } =
    useContext(FormContext);

  return (
    <form className="Form">
      <div className="insideTitle">
        <h2>Personal Details</h2>
      </div>
      <div className="formDiv">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="formDiv">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
    </form>
  );
};
