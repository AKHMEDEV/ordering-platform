import React from "react";
import { ModalWrapper } from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <div className="overlay" onClick={onClose}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <button className="closeBtn" onClick={onClose}>
            ✖
          </button>
          {children}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
