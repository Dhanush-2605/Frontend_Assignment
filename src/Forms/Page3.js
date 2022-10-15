import React, { useContext } from "react";
import FormContext from "../FormContext";
import "./page.css";

export const Page3 = () => {
  const { city, setCity, street, setStreet, country, setCountry } =
    useContext(FormContext);

  return (
    <form className="Form">
      <div className="insideTitle">
        <h2>Address</h2>
      </div>
      <div className="formDiv">
        <label htmlFor="exampleInputEmail1" className="form-label">
          City
        </label>
        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="formDiv">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Street
        </label>
        <input
          type="text"
          value={street}
          placeholder="Street"
          onChange={(e) => {
            setStreet(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="formDiv">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Country
        </label>
        <input
          type="text"
          value={country}
          placeholder="Country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
