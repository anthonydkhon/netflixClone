import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import devKhonLogo from "../media/devKhonLogo.png";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img
          className="loginScreen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen-btn">
          Sign In
        </button>
        <div className="loginScreen-gradient" />
      </div>
      <div className="loginScreen-body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimted films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen-getStarted"
                >
                  Get Started
                </button>
              </form>
              <div className="logo">
                <h3>This Netflix Clone was created by: </h3>
                <img className="logo-img" src={devKhonLogo} alt="logo" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
