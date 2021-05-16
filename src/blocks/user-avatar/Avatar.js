import React from "react";
import "./Avatar.scss";

// wasn't sure where to create it -- feel free to move to another folder.
function Avatar({ user, blackText }) {
  return (
    <div className="inline-flex items-center space-x-4">
      <span
        className="
        avatar rounded-full
        w-8 h-8 
        flex justify-center items-center 
        text-black uppercase text-sm font-medium"
      >
        {user.name.charAt(0)}
      </span>
      <span
        className={[
          "capitalize text-2xl align-middle",
          !!blackText && "text-black",
        ]}
      >
        {user.name}
      </span>
    </div>
  );
}

export default Avatar;
