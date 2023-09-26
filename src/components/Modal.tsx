import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "./css/ModalStyle.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal">
        <AiFillCloseSquare onClick={onClose} className="btn-modal" />
        <div className="modal-content">
          <h2>{title}</h2>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default Modal;
