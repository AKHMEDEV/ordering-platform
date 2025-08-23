"use client";
import React, { useState } from "react";
import Modal from "@/components/modal/modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {
  AuthModalWrapper,
  TabHeader,
  TabButton,
  TabContent,
} from "./AuthModal.styles";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: "login" | "register";
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultType = "login",
}) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultType);

  const handleSuccess = () => onClose();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AuthModalWrapper>
        <TabHeader>
          <TabButton
            $active={activeTab === "login"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </TabButton>
          <TabButton
            $active={activeTab === "register"}
            onClick={() => setActiveTab("register")}
          >
            Register
          </TabButton>
        </TabHeader>

        <TabContent>
          {activeTab === "login" ? (
            <LoginForm onSuccess={handleSuccess} />
          ) : (
            <RegisterForm onSuccess={handleSuccess} />
          )}
        </TabContent>
      </AuthModalWrapper>
    </Modal>
  );
};

export default AuthModal;
