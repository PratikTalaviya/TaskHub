import React from "react";
import { Toaster } from "react-hot-toast";
import "./LoginRegister.css";
import Register from "./Register";
import Login from "./Login";

function LoginRegister() {
  return (
    <div className="container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <Login />
        </div>
        <div className="register">
          <Register />
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default LoginRegister;
