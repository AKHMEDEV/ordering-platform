import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { PasswordWrapper } from "./Password.styless";

interface PasswordInputProps {
  placeholder?: string;
  name: string;
  register?: any;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  name,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordWrapper>
      <div className="passwordWrapper">
        <input
          {...(register ? register(name) : {})}
          name={name}
          type={showPassword ? "text" : "password"}
          className="formInput"
          placeholder={placeholder || "Enter password"}
          required
        />
        <span className="icon" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>
    </PasswordWrapper>
  );
};

export default PasswordInput;
