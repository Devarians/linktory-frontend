import React from "react";
import "./SearchBox.scss";

function SearchBox({ value, onChange, onSubmit }) {
  return (
    <div className="wrapper">
      <SearchIcon />
      <input
        className="textField text-sm"
        type="text"
        placeholder="Search for everything ..."
        value={value}
        onChange={(e) => {
          e.persist();
          onChange(e.target.value);
        }}
        onKeyPress={(e) => {
          e.persist();
          if (e.key === "Enter") {
            onSubmit(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default SearchBox;

// needs to move - didn't wanna mess up the folder structure
export const SearchIcon = () => (
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.625 8.1111H9.0325L8.8225 7.9161C9.5575 7.09277 10 6.02388 10 4.8611C10 2.26832 7.8175 0.166656 5.125 0.166656C2.4325 0.166656 0.25 2.26832 0.25 4.8611C0.25 7.45388 2.4325 9.55554 5.125 9.55554C6.3325 9.55554 7.4425 9.12943 8.2975 8.42166L8.5 8.62388V9.19443L12.25 12.7983L13.3675 11.7222L9.625 8.1111ZM5.125 8.1111C3.2575 8.1111 1.75 6.65943 1.75 4.8611C1.75 3.06277 3.2575 1.6111 5.125 1.6111C6.9925 1.6111 8.5 3.06277 8.5 4.8611C8.5 6.65943 6.9925 8.1111 5.125 8.1111Z" />
  </svg>
);
