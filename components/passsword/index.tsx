import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { PasswordWrapper } from "./Password.styless";

interface PasswordInputProps {
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordWrapper>
      <div className="passwordWrapper">
        <input
          type={showPassword ? "text" : "password"}
          className="formInput"
          placeholder={placeholder || "Enter password"}
        />
        <span className="icon" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>
    </PasswordWrapper>
  );
};

export default PasswordInput;
