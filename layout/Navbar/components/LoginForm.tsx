"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hook/useAuth";
import { FormWrapper } from "./AuthModal.styles";
import PasswordInput from "@/components/passsword";

interface LoginFormProps {
  onSuccess?: () => void;
}

interface LoginInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit } = useForm<LoginInputs>();
  const { mutate: loginMutate } = useLogin();

  const onSubmit = (data: LoginInputs) => {
    loginMutate(data, {
      onSuccess: () => {
        onSuccess?.();
      },
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="email" placeholder="Email" required />
      <PasswordInput
        name="password"
        placeholder="Password"
        register={register}
      />
      <button type="submit">Login</button>
    </FormWrapper>
  );
};

export default LoginForm;
