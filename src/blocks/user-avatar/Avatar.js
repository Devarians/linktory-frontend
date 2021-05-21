import React from "react";
import "./Avatar.scss";
import cn from "classnames";

// wasn't sure where to create it -- feel free to move to another folder.
function Avatar({ user, blackText, smallText, className }) {
  return (
    <div
      className={cn({
        "inline-flex items-center space-x-4": true,
        [className]: !!className,
      })}
    >
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
        className={cn({
          "capitalize align-middle font-medium": true,
          "text-black": blackText,
          "text-white": !blackText,
          "text-sm": smallText,
          "text-2xl": !smallText,
        })}
      >
        {user.name}
      </span>
    </div>
  );
}

export default Avatar;
