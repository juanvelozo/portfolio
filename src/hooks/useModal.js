import { useState } from "react";

export const useModal = ({ initialValue = false }) => {
  const [open, setOpen] = useState(initialValue);
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);
  return [open, OpenModal, CloseModal];
};
