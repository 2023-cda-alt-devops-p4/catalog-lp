import React from "react";
import "./css/ModalStyle.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <img src={imageUrl} alt="" />
        <p>{description}</p>
      </div>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default Modal;
