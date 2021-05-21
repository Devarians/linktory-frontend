import React from "react";
import styles from "./AddLinkButton.scss";

function AddLinkButton({ onClick }) {
  return (
    <button className="addLink">
      <AddIcon /> <span>ADD LINK</span>
    </button>
  );
}

export default AddLinkButton;

// needs to move - didn't wanna mess up the folder structure
const AddIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
    />
  </svg>
);
