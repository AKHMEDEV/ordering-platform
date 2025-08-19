import React from "react";
import PasswordInput from "@/components/passsword";

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <div className="formGroup">
        <label className="formLabel">Email</label>
        <input type="email" className="formInput" placeholder="Enter email" />
      </div>
      <div className="formGroup">
        <label className="formLabel">Password</label>
        <PasswordInput placeholder="Enter password" />
      </div>
      <button className="submitBtn">Login</button>
    </div>
  );
};

export default LoginForm;
