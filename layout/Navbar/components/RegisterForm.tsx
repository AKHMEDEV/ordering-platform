"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "@/hook/useAuth";
import { FormWrapper } from "./AuthModal.styles";
import PasswordInput from "@/components/passsword";

interface RegisterFormProps {
  onSuccess?: () => void;
}

interface RegisterInputs {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit } = useForm<RegisterInputs>();
  const { mutate: registerUser, status } = useRegister();

  const onSubmit = (data: RegisterInputs) => {
    registerUser(data, {
      onSuccess: () => {
        onSuccess?.();
      },
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <input {...register("fullName")} placeholder="Full Name" required />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input {...register("phone")} type="tel" placeholder="Phone" />
      <PasswordInput
        name="password"
        placeholder="Password"
        register={register}
      />
      <button type="submit" disabled={status === "pending"}>
        {status === "pending" ? "Loading..." : "Sign Up"}
      </button>
    </FormWrapper>
  );
};

export default RegisterForm;
