import React from "react";
import "./Footer.scss";
import UserAvatar from "../user-avatar/Avatar";

function Footer({ user }) {
  return (
    <div className="footer flex flex-col flex-nowrap space-y-4">
      <hr />
      <div className="footer-content w-full flex flex-row justify-center items-center">
        <UserAvatar user={user} smallText blackText className="flex-1" />
        <span className="text-black text-xs font-medium uppercase flex-1">
          © copyright devarians all rights reserved
        </span>
        <span className="flex flex-row-reverse gap-6 mr-6 flex-1">
          <SocialLink link="#linkedin" title="linkedin" />
          <SocialLink link="#twitter" title="twitter" />
          <SocialLink link="#github" title="github" />
        </span>
      </div>
    </div>
  );
}

const SocialLink = ({ link, title }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="uppercase font-medium text-sm"
  >
    {title}
  </a>
);

export default Footer;
