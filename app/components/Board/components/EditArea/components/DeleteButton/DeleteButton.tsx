import React from "react";
import styles from "./DeleteButton.module.css";
interface DeleteButtonProps {
  removeSelectedImage: () => void;
}
const DeleteButton = ({ removeSelectedImage }: DeleteButtonProps) => {
  return (
    <button
      type="button"
      onClick={removeSelectedImage}
      id={styles.deleteBtn}
      className="fixed px-3 py-3 text-base font-medium rounded-full  bg-white w-10 h-10 text-center inline-flex items-center"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.00049 4.5H18.0004"
          stroke="#A5A9C0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00049 1.5H14.0005"
          stroke="#A5A9C0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.50049 4.49609H16.5005V16.41C16.5005 17.2881 15.7886 17.9999 14.9105 17.9999H5.09046C4.21234 17.9999 3.50049 17.2881 3.50049 16.41V4.49609Z"
          stroke="#A5A9C0"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};

export default DeleteButton;
