import React, { useState } from "react";
import "./Header.scss";
import Avatar from "../user-avatar/Avatar";
import SearchBox from "./SearchBox";
import AddLinkButton from "./AddLinkButton";

export default function Header({ user }) {
  const [search, setSearch] = useState("");

  return (
    <div className="header w-full shadow px-6 py-3.5 text-white flex items-center justify-between">
      <Avatar user={user} />
      <SearchBox
        value={search}
        onChange={setSearch}
        onSubmit={(v) =>
          alert(
            `Just got submitted... yay :|\nhere's what they're looking for:\n ${v}`
          )
        }
      />
      <AddLinkButton
        onClick={() => alert("I wanna add a link. help me dude.")}
      />
    </div>
  );
}
