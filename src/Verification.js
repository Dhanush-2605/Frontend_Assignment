import React from "react";
import { useState } from "react";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

import Success from "./Success";
import firebase from "./firebase";
// import firebase from "./firebase";
import "./verification.css";
// import firebase from "./firebase";
const Verification = () => {
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [toogle, setToogle] = useState(false);
  //   const Verify = () => {
  //     // let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha');
  //     let num = `+91${number}`;
  //     firebase.auth()
  //       .signInWithPhoneNumber(num)
  //       .then(function (e) {
  //         let code = prompt("enter OTP", "");
  //         if (code === null) return;
  //         e.confirm(code).then(function (result) {
  //           console.log(result.user);
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
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
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("otp sent");
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Error; SMS not sent
        // ...
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

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(number);
  return (
    <div className="container">
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
