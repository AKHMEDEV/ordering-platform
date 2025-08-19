import React from "react";
import Modal from "@/components/modal/modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "register";
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {type === "register" ? <RegisterForm /> : <LoginForm />}
    </Modal>
  );
};

export default AuthModal;
