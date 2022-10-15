import React from "react";
import { useState } from "react";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

import Success from "./Success";
import firebase from "./firebase";

import "./verification.css";

const Verification = () => {
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [toogle, setToogle] = useState(false);

  const Verify = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("recaptha verified");
        },
        defaultCountry: "IN",
      }
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    Verify();

    const phoneNumber = `+91${number}`;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("otp sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        if (user) {
          setToogle(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(number);
  return (
    <div className="container">
      <div className="title">
     
        <h1>OTP Verification</h1>
      </div>
      <div className="verificationWrapper">
        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button"></div>

          <div>
            <input
              type="phone"
              placeholder="Enter Number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>

          <div className="numberButton">
            <button onClick={Verify}>GET OTP</button>
          </div>
        </form>
        <form onSubmit={onSubmitOTP}>
          <div>
            <input
              type="phone"
              placeholder="Enter OTP"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </div>
          <div className="verifyOtp">
            <button>VERIFY OTP </button>
          </div>
        </form>
        <div className="successDiv">{toogle && <Success />}</div>
      </div>
    </div>
  );
};

export default Verification;
