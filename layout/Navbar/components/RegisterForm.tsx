import React from "react";
import PasswordInput from "@/components/passsword";

const RegisterForm = () => {
  return (
    <div>
      <h2>Register</h2>
      <div className="formGroup">
        <label className="formLabel">Username</label>
        <input type="text" className="formInput" placeholder="Enter username" />
      </div>
      <div className="formGroup">
        <label className="formLabel">Email</label>
        <input type="email" className="formInput" placeholder="Enter email" />
      </div>
      <div className="formGroup">
        <label className="formLabel">Password</label>
        <PasswordInput placeholder="Enter password" />
      </div>
      <button className="submitBtn">Sign Up</button>
    </div>
  );
};

export default RegisterForm;
