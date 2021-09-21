import React, { useContext } from "react";
import { ModalItem } from "./ModalItem";
import LanguageContext from "../context/Language/languageContext";
import { Language } from "../components/Language/Language";
import { Switch } from "../components/Language/Switch";
import { useModal } from "../hooks/useModal";

export const Modal = () => {
  const { handleLang } = useContext(LanguageContext);
  const [OpenedModal, OpenModal, CloseModal] = useModal(false);
  return (
    <div>
      <Language action={OpenModal} />
      <ModalItem open={OpenedModal} close={CloseModal}>
        <Switch handleLang={handleLang} close={CloseModal} />
      </ModalItem>
    </div>
  );
};
