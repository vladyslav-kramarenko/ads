import React from "react";
import "./ModalMessage.css";
import { useTranslation } from "react-i18next";

interface ModalMessageProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

const ModalMessage: React.FC<ModalMessageProps> = ({ isOpen, message, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <h1>{message}</h1>
                <button onClick={onClose}>{t("modal.close")}</button>
            </div>
        </div>
    );
};

export default ModalMessage;
