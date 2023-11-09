import React from "react";
import styles from "./SaveButton.module.css";
interface SaveButtonProps {
  downloadImage: () => void;
}
const SaveButton = ({ downloadImage }: SaveButtonProps) => {
  return (
    <button
      type="button"
      className="fixed px-28 py-3 text-base font-medium text-center inline-flex items-center text-white bg-rose-500 rounded-lg hover:bg-rose-400"
      onClick={downloadImage}
      id={styles.saveBtn}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.6001 7.19981L8.0001 8.7998L6.4001 7.19981"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 2.3998V8.7998"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 8V8.8C2 11.0091 3.79086 12.8 6 12.8H10C12.2091 12.8 14 11.0091 14 8.8V8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Save
    </button>
  );
};

export default SaveButton;
