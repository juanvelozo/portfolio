import React from "react";
import { IoLanguage } from "react-icons/io5";

export const Language = ({ action }) => {
  return (
    <div>
      <button onClick={action}>
        <IoLanguage />
      </button>
    </div>
  );
};
